import { Component, Output,EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  @Output() newEvent = new EventEmitter<number>()
  productCount:number=0
  products!:MatTableDataSource<any>
  displayedColumns:string[]=["name","description","price","add"]
  constructor(private productService:ProductService) {}
  ngOnInit(){
    this.productService.onGetProduct().subscribe((data:any)=>{
      this.products=data
      console.log(this.products)
  })
}
addToCart(){
   this.productCount += 1
  //  this.newEvent.emit(this.productCount)
   this.productService.onCount(this.productCount)
}








}