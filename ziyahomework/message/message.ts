import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MessagelistsPage} from '../messagelists/messagelists'



@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})

export class MessagePage{
  items=[];
  constructor(public nav:NavController) {
    this.items = [
      {
        'title': '我的电脑',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': 'assets/imgs/tou1.png',
        'time':'18:09 pm'
      },
      {
        'title': '坏孩子',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': 'assets/imgs/tou2.png',
        'time':'22:31 pm'
      },
      {
        'title': '一颗布丁啊',
        'description': 'The latest version of the web\'s markup language.',
        'color': 'assets/imgs/tou3.png',
        'time':'12:31 am'
      },
      {
        'title': '王老师',
        'description': 'One of the most popular programming languages on the Web!',
        'color': 'assets/imgs/tou4.png',
        'time':'09:31 am'
      },
      {
        'title': '我的手机',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': 'assets/imgs/tou5.png',
        'time':'07:25 am'
      },
      {
        'title': '唐老鸭先生',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': 'assets/imgs/tou1.png',
        'time':'12:31 pm'
      },
      {
        'title': '米妮',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': 'assets/imgs/tou2.png',
        'time':'14:54 pm'
      },
      {
        'title': '文过饰非',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': 'assets/imgs/tou3.png',
        'time':'11:31 am'
      },
      {
        'title': 'hello world',
        'description': 'The official mascot of the Linux kernel!',
        'color': 'assets/imgs/tou4.png',
        'time':'08:01 am'
      },
    ]
  }

  openNavDetailsPage(item) {
    this.nav.push(MessagelistsPage, { item: item });
  }
}


