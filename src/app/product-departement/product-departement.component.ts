import { Product } from './../product/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-departement',
  templateUrl: './product-departement.component.html',
  styleUrls: ['./product-departement.component.css']
})
export class ProductDepartementComponent implements OnInit {


  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
