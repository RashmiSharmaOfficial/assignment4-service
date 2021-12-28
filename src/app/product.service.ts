import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  arrProducts = [
    new Products(101, 'Television', 45000),
    new Products(102, 'AC', 26000),
    new Products(103, 'Refrigerator', 55000)
  ]


  getAllProducts(){
    return this.arrProducts;
  }

  addProducts(pId: any, pName: string, pCost: any){
    return new Products(pId, pName, pCost);
  }

  searchProductId(pSearchId:any){
    if(pSearchId == ''){
      return this.arrProducts;
    }
    return this.arrProducts.filter(item => item.productId == pSearchId);
  }

  searchProductName(pSearchName:string){
    if(pSearchName == ''){
      return this.arrProducts;
    }
    return this.arrProducts.filter(item => item.productName.toLowerCase() == pSearchName.toLowerCase());
  }

  deleteProduct(pId:any){
    this.arrProducts.forEach((item, index) => {
      if(item.productId == pId){
        this.arrProducts.splice(index, 1);
      }
    })
    return this.arrProducts;
  }
}
