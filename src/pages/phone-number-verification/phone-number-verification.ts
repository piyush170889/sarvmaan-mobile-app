import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OtpVerificationPage } from '../otp-verification/otp-verification';

/**
 * Generated class for the PhoneNumberVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-number-verification',
  templateUrl: 'phone-number-verification.html',
})
export class PhoneNumberVerificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneNumberVerificationPage');
  }
	goToOtpVerificationScreen(){
 this.navCtrl.push(OtpVerificationPage);
 }

}
