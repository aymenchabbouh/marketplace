import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()  public product: Product;
  @Output() public selectproduct: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }
  selectProduct(product: Product) {
    this.selectproduct.emit(product);
  }

  verify() {
    if(this.product.order_quantity< 0){
      this.product.order_quantity = 0;
    }

  }
}
