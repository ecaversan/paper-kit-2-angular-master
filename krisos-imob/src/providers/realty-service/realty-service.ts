import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RealtyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RealtyServiceProvider {

  private baseApiPath = "http://127.0.0.1:8080";
  private realtys;

  constructor(public http: Http) {
    console.log('Hello RealtyServiceProvider Provider');
  }

  listAll() {
    return this.http.get(this.baseApiPath + "/api/list  ").map(res => res);
  }

}
