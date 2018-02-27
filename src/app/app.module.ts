import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { ConfirmLoginPage } from '../pages/confirm-login/confirm-login';
import { HomescreenPage } from '../pages/homescreen/homescreen';
import { AllPage } from '../pages/all/all';
import { ApprovedPage } from '../pages/approved/approved';
import { NewPage } from '../pages/new/new';
import { PendingPage } from '../pages/pending/pending';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistrationPage,
    ConfirmLoginPage,
    HomescreenPage,
    AllPage,
    ApprovedPage,
    NewPage,
    PendingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsPlacement: 'top',
  platforms: {
    android: {
      tabsPlacement: 'top'
    },
    ios: {
      tabsPlacement: 'top'
    },
    windows:
    {
      tabsPlacement: 'top'
    }
  }
})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistrationPage,
    ConfirmLoginPage,
    HomescreenPage,
    AllPage,
    ApprovedPage,
    NewPage,
    PendingPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
