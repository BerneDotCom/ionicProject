import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddImagePage } from './add-image';
import { Camera } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { MediaCapture } from '@ionic-native/media-capture';

@NgModule({
  declarations: [
    AddImagePage,
  ],
  imports: [
    IonicPageModule.forChild(AddImagePage),
  ],
  providers: [
    Camera,
    Base64ToGallery,
    MediaCapture
  ]
})
export class AddImagePageModule {}
