import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(msg: any){
    let messageForLogin = new Date() + " " + msg;
    console.log(messageForLogin);
  }
  error(msg: any){
    let messageForLogin = new Date() + " " + msg;
    console.log(messageForLogin);
  }
  debug(msg: any){
    let messageForLogin = new Date() + " " + msg;
    console.log(messageForLogin);
  }

}
