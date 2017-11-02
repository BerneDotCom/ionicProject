import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

//Import des pages de l'application
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AddImagePage } from '../pages/add-image/add-image';

//Import des plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddImagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddImagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Base64ToGallery
  ]
})
export class AppModule {}
