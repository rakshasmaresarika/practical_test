import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practical_test';
 constructor(private service:ProductService){

 }
  quantity=0
  ngDoCheck(){
   this.quantity =this.service.count
  }
}
