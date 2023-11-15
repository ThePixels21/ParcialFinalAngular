import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  products: Product[] = [] 

  constructor(private productsService: ProductsService){}

  ngOnInit(){
    const pro = this.productsService.products
    pro.forEach(product => {
      if(product.promo == 0){
        this.products.push(product)
      }
    });
  }


}
