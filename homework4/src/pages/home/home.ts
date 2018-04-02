import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelloPage } from '../hello/hello';
import { IonicPage, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(List) list: List;
  constructor(public navCtrl: NavController) {

  }
goSub(){
  this.navCtrl.push(HelloPage,{'name':'su'});
  console.log('tiaohzuan');
}
}
