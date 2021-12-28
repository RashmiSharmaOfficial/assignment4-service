import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Output() messageToEmit = new EventEmitter<string>();
  @Output() objToEmit = new EventEmitter<object>();
  @Output() arrToEmit = new EventEmitter();

  @Output() parentFunction:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // this.parentFunction.emit(strObj)
  }



  strData = "";
  sendMessageToParent(){
    this.messageToEmit.emit(this.strData);
  }

  sendObjToParent(){
    let strObj = {id: 101, sname: 'Rashmi'};
    this.objToEmit.emit(strObj);
  }

  sendArrToParent(){
    let strArr = ['Apple', 'Orange', 'Pineapple'];
    this.arrToEmit.emit(strArr);
  }

  // sendMessageToParent(){
  //   this.messageToEmit.emit(this.strData);
  // }

  // sendObjToParent(){
  //   this.objToEmit.emit(this.strObj);
  // }

}
