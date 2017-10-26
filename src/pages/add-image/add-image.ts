import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';


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
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  base64Image:String;
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera,private base64ToGallery: Base64ToGallery) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddImagePage');
  }


  //Lancement de la caméra pour la capture d'une image
  runCamera(event){
    this.camera.getPicture(this.options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     this.base64ToGallery.base64ToGallery(imageData, { prefix: '_img' }).then(
       res => console.log('Saved image to gallery ', res),
       err => console.log('Error saving image to gallery ', err)
     );
    }, (err) => {
     // Handle error
    });
  }
}
