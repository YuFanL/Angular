import { Component } from '@angular/core';
import { LocalstroageService } from '../app/services/localstroage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public localstorage:LocalstroageService) { }
  dataarr1=[];
  fn1(item){
    this.dataarr1.push(item);
    this.localstorage.addData('data1',this.dataarr1);
    console.log(this.dataarr1);
  }
a;
da1;

 ngOnInit(){
  this.a=this.localstorage.showData('data1');
  this.da1=this.a.split(',');
  if(this.da1 != ''){
  this.dataarr1=this.da1;}
  
}
}
