import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RealtyPage } from './realty';

@NgModule({
  declarations: [
    RealtyPage,
  ],
  imports: [
    IonicPageModule.forChild(RealtyPage),
  ],
})
export class RealtyPageModule {}
