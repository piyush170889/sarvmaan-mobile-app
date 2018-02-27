import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileChooser } from "@ionic-native/file-chooser";

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  public onFileFromStorageChosen(filesEvent: any) {
    this.processFileFromStorage(filesEvent);
  }

   public readfile(file: any): void {
    let reader = new FileReader();
    reader.onload = (e) => {
      let dataUrl = reader.result;
      //and do something with the reader.
    };
    reader.readAsDataURL(file);
  }


  public processFileFromStorage(event: any) {
    let file = event.target.files[0];
    //you can read various properties of the file (like mimetype and size) from the file object.
    console.log(file);
    readfile(file);
 }

//this one reads the contents of the file as a URL that contains its data:

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
