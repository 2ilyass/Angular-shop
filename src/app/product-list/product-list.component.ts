import { Product } from './../product/product';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  productList: Product[];

  @Output()
  onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() { 
    this.onProductSelected= new EventEmitter();
  }


  isSelected(prod: Product):boolean{
    if(!prod || !this.currentProduct){
      return false;
    }
    return prod.tag === this.currentProduct.tag
  }



  clicked(prod:Product):void{
    this.currentProduct=prod;
    this.onProductSelected.emit(prod);
  }

 

  ngOnInit() {
  }

  

}
