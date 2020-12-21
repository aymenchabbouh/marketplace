import {Product} from './product.model';

export class PanelLine {
  private _id: number
  private _product: Product;
  private _quantity: number;
  private _date: Date;
  private _discount: number;
  private _total :number;

  constructor( product: Product, quantity: number, discount: number) {
    this._product = product;
    this._quantity = quantity;
    this._discount = discount;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    this._discount = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }
}
