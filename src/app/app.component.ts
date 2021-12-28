import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Products } from './products';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Assignment 4';

  //informing angular to create the object of ProductService to use the functions of ProductService
  constructor(private productServiceObj: ProductService,
              private loggerServiceObj: LoggerService){};

  arrProductObjs:Products[] = [];

  getProductData(){
    this.loggerServiceObj.log("Before fetching the records from products service")
    this.arrProductObjs = this.productServiceObj.getAllProducts();
    if(!this.arrProductObjs){
      this.loggerServiceObj.error("Error");
    }
    this.loggerServiceObj.log("After fetching the records from products service")

  }

  addProduct(pId:any, pName: string, pCost: any){
    this.arrProductObjs.push(this.productServiceObj.addProducts(pId, pName, pCost));
  }

  searchProductId(pSearchId: any){
    this.arrProductObjs = this.productServiceObj.searchProductId(pSearchId);
  }
  searchProductName(pSearchName: any){
    this.arrProductObjs = this.productServiceObj.searchProductName(pSearchName);
  }
  deleteById(pDeleteId: any){
    this.arrProductObjs = this.productServiceObj.deleteProduct(pDeleteId);
  }

  strMsgFromChild ="";

  getMessage(msg: any){
    this.strMsgFromChild = msg;
  }

  objFromChild = {id: 1, name:'ree'};
  first = 0;
  sec = '';
  getObject(msg:any){
    console.warn(msg);
    // this.objFromChild = msg.value();
    this.first = msg.id;
    this.sec = msg.sname;
  }

  fruits = [];
  getArray(msg:any){
    this.fruits = msg;
    console.warn(msg);
  }

}
