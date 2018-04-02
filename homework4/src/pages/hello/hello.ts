import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';
/**
 * Generated class for the HelloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage {
  @ViewChild(List) list: List;
  items = [
    '我的电脑',
    '大笨熊',
    '大白兔',
    '珺珺',
    '张老师',
    '我的电脑',
    '大笨熊',
    '大白兔',
    '珺珺',
    '张老师'
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloPage');
    console.log(this.navParams.get('name'));
   console.log(this.navParams.data); 
  }
  del(i){
    this.items.splice(i,1);
  }
  goTop(i){
    this.items.unshift(this.items[i]);
    this.items.splice(i+1,i);
  }
}
