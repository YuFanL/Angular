import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {ZhucePage} from '../zhuce/zhuce'
import { TabsPage } from '../../pages/tabs/tabs'
/**
 * Generated class for the DengluPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-denglu',
  templateUrl: 'denglu.html',
})
export class DengluPage {

  constructor(public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController ) {
  }

  back(){
    let profileModal = this.modalCtrl.create(TabsPage);
    profileModal.present();
  }
  zhuce(){
    let profileModal = this.modalCtrl.create(ZhucePage);
    profileModal.present();
  }
}
