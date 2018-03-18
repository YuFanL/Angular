import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataarr1=[];
  fn1(item){
    this.dataarr1.push(item);
    console.log(this.dataarr1);
  }
}
