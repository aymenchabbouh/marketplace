import {PanelLine} from './panel-line.model';
import {User} from './user.model';
import {PanelStatus} from './Enums/panel-status.enum';
import {Product} from './product.model';

export class Panel {
  private _products_items: PanelLine[];
  private _customer: User;
  private _total_ttc: number;
  private _status: PanelStatus;
  private _created: Date;


  get products_items(): PanelLine[] {
    return this._products_items;
  }

  set products_items(value: PanelLine[]) {
    this._products_items = value;
  }

  get customer(): User {
    return this._customer;
  }

  set customer(value: User) {
    this._customer = value;
  }

  get total_ttc(): number {
    return this._total_ttc;
  }

  set total_ttc(value: number) {
    this._total_ttc = value;
  }

  get status(): PanelStatus {
    return this._status;
  }

  set status(value: PanelStatus) {
    this._status = value;
  }

  get created(): Date {
    return this._created;
  }

  set created(value: Date) {
    this._created = value;
  }
}
