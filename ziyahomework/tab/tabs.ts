import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { MessagePage } from '../message/message';
import { MePage } from '../me/me'
import {  LoadPage } from '../load/load'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab4Root = MessagePage;
  tab5Root =  LoadPage;
  constructor() {

  }
}
