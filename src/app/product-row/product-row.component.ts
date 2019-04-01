import { ProductListComponent } from './../product-list/product-list.component';
import { Product } from './../product/product';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input()
  product: Product;

  @HostBinding('attr.class') 
  cssClass = 'item ';
 

  ngOnInit() {
  }

}
