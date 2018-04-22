import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-zhucelist',
  templateUrl: 'zhucelist.html',
})
export class ZhucelistPage {

  constructor(public viewCtrl:ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  back(){
    this.viewCtrl.dismiss();
  }
}
