import { Component, OnInit,Input } from '@angular/core';
import { LocalstroageService } from '../../services/localstroage.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public localstorage:LocalstroageService) { }
  b;
  da2;
  ngOnInit() {
    this.b=this.localstorage.showData('data2');
    this.da2=this.b.split(',');
    if(this.da2 != '')
    {this.arr2=this.da2;}
    console.log(this.b);
  }

  @Input() arr1:Array<any>;
  arr2=[];
  
  change(idx){
    this.arr2.push(this.arr1[idx]);
    this.arr1.splice(idx,1);
    this.localstorage.addData('data1',this.arr1);
    this.localstorage.addData('data2',this.arr2);
  }
  delData1(idx){
    this.arr1.splice(idx,1);
    this.localstorage.addData('data1',this.arr1);
    this.localstorage.addData('data2',this.arr2);
  }

  change2(idx){
    this.arr1.push(this.arr2[idx]);
    this.arr2.splice(idx,1);
    this.localstorage.addData('data1',this.arr1);
    this.localstorage.addData('data2',this.arr2);
  }
  delData2(idx){
    this.arr2.splice(idx,1);
    this.localstorage.addData('data1',this.arr1);
    this.localstorage.addData('data2',this.arr2);
  }
}
