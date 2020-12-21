import {Picture} from './picture.model';
import {Batch} from './batch.model';
import {range} from 'rxjs';
import {count} from 'rxjs/operators';

export class Product {
  public static count: number = 0;
  private _id: number;
  private _reference: string;
  private _product_name: string;
  private _price: number;
  private _quantity: number;
  private _order_quantity: number;
  private _discount: number;
  private _pictures: Picture[];
  private _batches: Batch[];
  private _url: string;
  private static instance: Product =  null;

  constructor(product_name: string, discount: number) {
    Product.count++ ;
    this._id = Product.count ;
    this._quantity = Math.floor(Math.random() * Math.floor(1000));
    this._price = Math.random()* Math.floor(1000);
    this._price = parseFloat( this.price.toPrecision(3));
    this._product_name = product_name;
    this._discount = discount;
    this.order_quantity = 1;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get reference(): string {
    return this._reference;
  }

  set reference(value: string) {
    this._reference = value;
  }

  get product_name(): string {
    return this._product_name;
  }

  set product_name(value: string) {
    this._product_name = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get pictures(): Picture[] {
    return this._pictures;
  }

  set pictures(value: Picture[]) {
    this._pictures = value;
  }

  get batches(): Batch[] {
    return this._batches;
  }

  set batches(value: Batch[]) {
    this._batches = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get order_quantity(): number {
    return this._order_quantity;
  }

  set order_quantity(value: number) {
    this._order_quantity = value;
  }
  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    this._discount = value;
  }
}
