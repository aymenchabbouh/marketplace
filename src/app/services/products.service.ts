import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[];
  constructor() {
  }
  public generateProducts(): Observable<Product[]>{
    if(Product.count <= 0){
    this.products = [
      new Product("Test Product 01" ,20),
      new Product("Test Product 02" ,0),
      new Product("Test Product 03" ,0),
      new Product("Test Product 04" ,0),
      new Product("Test Product 05" ,0),
      new Product("Test Product 06" ,0),
      new Product("Test Product 07" ,0),
      new Product("Test Product 08" ,0),
      new Product("Test Product 09" ,0),
      new Product("Test Product 10" ,0),
      new Product("Test Product 11" ,0),
      new Product("Test Product 12" ,0),
      new Product("Test Product 13" ,0),
      new Product("Test Product 14" ,0),
      new Product("Test Product 15" ,0),
      new Product("Test Product 16" ,0),
      new Product("Test Product 17" ,0),
      new Product("Test Product 18" ,0),
      new Product("Test Product 19" ,0),
      new Product("Test Product 20" ,0),
      new Product("Test Product 20" ,0),
      new Product("Test Product 21" ,0),
      new Product("Test Product 22" ,0),
      new Product("Test Product 23" ,0),
      new Product("Test Product 24" ,0),
      new Product("Test Product 25" ,0),
      new Product("Test Product 26" ,0),
      new Product("Test Product 27" ,0),
      new Product("Test Product 28" ,0),
      new Product("Test Product 29" ,0),
      new Product("Test Product 30" ,0),
    ];
    }
    return of(this.products);
  }
}
