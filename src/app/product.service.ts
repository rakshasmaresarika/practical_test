import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  count:number= 0
  constructor(private httpRequest:HttpClient) { }

  onGetProduct(){
    return this.httpRequest.get(' http://localhost:3000/products')
    
  }

  onCount(countInp:number){
    this.count = countInp
  }
}
