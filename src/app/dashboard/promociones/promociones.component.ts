import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent {

  products: Product[] = []
  female: boolean = false

  constructor(private productsService: ProductsService){}

  ngOnInit(){
    const pro = this.productsService.products
    pro.forEach(product => {
      if(product.promo != 0){
        this.products.push(product)
      }
    });
    if(sessionStorage.getItem('gender')!!.toLowerCase() == 'female'){
      this.female = true
    }
  }

}
