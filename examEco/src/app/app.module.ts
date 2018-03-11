import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import {AngularFireModule} from 'angularfire2'
import {AngularFireAuthModule } from 'angularfire2/auth'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { SocialPage } from '../pages/social/social';
import { notasServices } from '../services/notas.services';
import { DetailsPage } from '../pages/details/details';

const firebase ={
  apiKey: "AIzaSyDOsOPFVfFiNHizup0eQWQFAYsfcMnaQ7Q",
  authDomain: "exameco-68864.firebaseapp.com",
  databaseURL: "https://exameco-68864.firebaseio.com",
  projectId: "exameco-68864",
  storageBucket: "exameco-68864.appspot.com",
  messagingSenderId: "457009242374"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    SocialPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    SocialPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    notasServices
  ]
})
export class AppModule {}
