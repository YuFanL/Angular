import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() arr1:Array<any>;
  arr2=[];
  
  change(idx){
    this.arr2.push(this.arr1[idx]);
    this.arr1.splice(idx,1);
  }
  delData1(idx){
    this.arr1.splice(idx,1);
  }

  change2(idx){
    this.arr1.push(this.arr2[idx]);
    this.arr2.splice(idx,1);
  }
  delData2(idx){
    this.arr2.splice(idx,1);
  }
}
