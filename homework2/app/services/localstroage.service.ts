import { Injectable } from '@angular/core';

@Injectable()
export class LocalstroageService {

constructor() { }
todoList:any;


addData(key:string,data:any){
    localStorage.setItem(key,data);

    console.log('触发添加数据');
  }

showData(key){
  this.todoList= localStorage.getItem(key);
  return this.todoList;
}

}
