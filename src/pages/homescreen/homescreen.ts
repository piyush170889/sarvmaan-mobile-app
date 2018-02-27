import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { AllPage } from '../all/all';
import { ApprovedPage } from '../approved/approved';
import { NewPage } from '../new/new';
import { PendingPage } from '../pending/pending';



@Component({
  selector: 'page-homescreen',
  templateUrl: 'homescreen.html',
})
export class HomescreenPage {

 	all = AllPage;
 	approved = ApprovedPage;
 	new = NewPage;
 	pending = PendingPage;
 	

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomescreenPage');
  }

}
