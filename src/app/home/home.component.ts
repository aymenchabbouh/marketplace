import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {Panel} from '../models/panel.model';
import {PanelLine} from '../models/panel-line.model';
import {ProductsService} from '../services/products.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public products: Product[];
  public panel: Panel;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.generateProducts().subscribe(products => this.products = products);
  }
  addToPanel(product: Product): boolean {
    let product_index: number = this.products.findIndex( item => item.id === product.id && item.quantity - product.order_quantity >= 0);
    if (product_index > -1) {
      if(this.addProduct(product,product_index)) {
        this.calculate();
        return true;
      }
    }
    return false;
  }
  removeFromPanel(product: Product): boolean{
    if(this.removeProduct(product)){
      this.calculate();
      return true;
    }
    return  false;
  }
  addProduct(product: Product,product_index): boolean {
    if (!this.updateProduct(product, product.order_quantity,product_index)) {
      this.panel.products_items.push(new PanelLine(product, product.quantity, product.discount));
      this.products[product_index].quantity -= product.order_quantity;
      this.products[product_index].order_quantity = 0;
      return  true;
    } else {
      return false;
    }
  }

  updateProduct(product: Product, updateQuantity: number, product_index: number): boolean {
    let line_index : number =  this.panel.products_items.findIndex(item => item.id === product.id);
    if (  line_index >= -1) {
      this.panel.products_items[line_index].quantity += updateQuantity;
      this.products[product_index].quantity -= updateQuantity;
      this.products[product_index].order_quantity = 0;
      return  true;
    } else {
      return false;
    }
  }
  removeProduct(product: Product): boolean {
    let line_index : number =  this.panel.products_items.findIndex(item => item.id === product.id);
    let product_index : number =  this.products.findIndex(item => item.id === product.id);
    if (  line_index >= -1) {
      let to_restore_quantity: number = this.panel.products_items[line_index].quantity;
      delete this.panel.products_items[line_index];
      this.products[product_index].quantity += to_restore_quantity;
      return  true;
    } else {
      return false;
    }
  }
  calculate(){
    this.panel.products_items.forEach(elem =>{
      elem.discount = elem.product.discount;
      elem.total = elem.quantity * elem.product.price * ( 1 - elem.discount / 100) ;
      this.panel.total_ttc += elem.total = parseFloat(elem.total.toPrecision(3));
    });
  }
}
