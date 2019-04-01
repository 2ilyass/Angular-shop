import { Product } from './product/product';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  products: Product[];


  constructor(){
    this.products =[
      new Product('basket',230,'fire','assets/images/Soma.jpg',["Men","Accesories","Hat"]),
      new Product("bottle", 230, "water", "assets/images/somo.jpg", ["Women", "beauty", "Wax"]),
      new Product("flyer", 230, "air", "assets/images/somi.png", ["Men", "Prod", "Gel"])
    ];
  }

  productWasSelected(product: Product): void {
     console.log('Product clicked: ', product);
    
  }

}
