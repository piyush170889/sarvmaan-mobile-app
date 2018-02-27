import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmLoginPage } from './confirm-login';

@NgModule({
  declarations: [
    ConfirmLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmLoginPage),
  ],
})
export class ConfirmLoginPageModule {}
