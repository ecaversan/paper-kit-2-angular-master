import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RealtyServiceProvider } from '../../providers/realty-service/realty-service';

/**
 * Generated class for the RealtyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-realty',
  templateUrl: 'realty.html',
})
export class RealtyPage {

  public realtys: any;
  public totalOfRealtys: any;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public realtyService: RealtyServiceProvider) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad RealtyPage');

    this.realtyService.listAll().subscribe((res: any) => {
      this.realtys = res.json();
      this.totalOfRealtys = Object.keys(this.realtys).length;
    });

  }

  isFavorite(referencia){

    switch (referencia) {
      case "JB-0001":
        return true;
      case "JB-0002":
        return false;
      default:
        return false;
    }
    
  }

}
