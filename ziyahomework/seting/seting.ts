import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {  DengluPage } from '../../pages/denglu/denglu'
/**
 * Generated class for the SetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  constructor(public modalCtrl:ModalController,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
  }
  back(){
    this.viewCtrl.dismiss();
  }
  denglu(){
    let profileModal = this.modalCtrl.create(DengluPage);
    profileModal.present();
  }
}
