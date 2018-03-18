import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  @Output() onkeyUp = new EventEmitter ();
  constructor() { }
  ngOnInit() {
  }

  tolist=[];
  content='';
  keyData(e){
    if(e.keyCode == 13){
      this.onkeyUp.emit(this.content);
      this.tolist.push(this.content);
      this.content="";
      console.log(this.tolist);
    }
  }
}
