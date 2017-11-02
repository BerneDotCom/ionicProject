import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the AddImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-image',
  templateUrl: 'add-image.html',
})

export class AddImagePage {
  // Définition des options pour la caméra
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  //Déclaration de la variable qui contiendra l'image sous forme de string
  base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera,private base64ToGallery: Base64ToGallery, private mediaCapture: MediaCapture, private localNotifications: LocalNotifications) {
    //Constructor
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddImagePage');
  }


  /**
  *Lancement de la caméra pour la capture d'une image
  *Sauvegarde de l'image
  *Affichage de la notification de succes
**/
  runCamera(event){
    this.camera.getPicture(this.options).then((imageData) => {
     //Conversion de l'image en base64
     this.base64Image = 'data:image/jpeg;base64,' + imageData;


    //Sauvegarde de l'image dans la gallery de l'utilisateur
     this.base64ToGallery.base64ToGallery(imageData, { prefix: '_img' }).then(
       //Affichage de la notification de succes
       res => {
         this.localNotifications.schedule({
           id: 1,
           text: 'Votre image a bien été sauvegardée',
           title: 'Notification splendide'
         });
       }
      )
    }, (err) => {
      //Message de retour en cas d'échec
      err => console.log('L\'image n\'a pas pu être sauvegardée ', err)
    });
  }

  captureMovie(event)
  {

    var options = {
     limit: 1,
     duration: 10
    };

   this.mediaCapture.captureVideo(options).then(
    (data: MediaFile[]) => onSuccess(data),
    (err: CaptureError) => onError(err)
  );

   function onSuccess(mediaFiles) {
       var i, path, len;
       for (i = 0, len = mediaFiles.length; i < len; i += 1) {
          path = mediaFiles[i].fullPath;
          console.log(mediaFiles);
       }
    }

   function onError(error) {
      console.log('Error code: ' + error.code, null, 'Capture Error');
    }
  }
}
