import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
/**
 * Generated class for the OtpVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp-verification',
  templateUrl: 'otp-verification.html',
})
export class OtpVerificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpVerificationPage');
  }
registrationScreen(){
this.navCtrl.push(RegistrationPage);
 }
}
