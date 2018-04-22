import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs'
import { ZhucelistPage } from '../../pages/zhucelist/zhucelist'
/**
 * Generated class for the ZhucePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html',
})
export class ZhucePage {

  constructor(public modalCtrl:ModalController,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZhucePage');
  }
  back(){
    let profileModal = this.modalCtrl.create(TabsPage);
    profileModal.present();
  }
zhuce(){
  console.log('注册');
}
zhucetxt(){
  let profileModal = this.modalCtrl.create(ZhucelistPage);
  profileModal.present();
}
}
