import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {
  activeMenu:string;
  content:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
  }

}
