import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PhoneNumberVerificationPage } from '../phone-number-verification/phone-number-verification';
import { HomescreenPage } from '../homescreen/homescreen';

/**
* Generated class for the LoginPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@Component({
 selector: 'page-login',
 templateUrl: 'login.html',
})
export class LoginPage {

 constructor(public navCtrl: NavController, public navParams: NavParams) {
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad LoginPage');
 }

 mobileNumberVerification(){
 this.navCtrl.push(PhoneNumberVerificationPage);
 }

 homeScreen(){
 this.navCtrl.push(HomescreenPage);
 }

}