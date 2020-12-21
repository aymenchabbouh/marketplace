import {Panel} from './panel.model';
import {Contact} from './contact.model';

export class User {
  private _id: number;
  private _firstname:string;
  private _lastname:string;
  private _username:string;
  private _password:string;
  private _contact:Contact;
  private _panel:Panel;

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }
  get contact(): Contact {
    return this._contact;
  }

  set contact(value: Contact) {
    this._contact = value;
  }
  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }
  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }
  get panel(): Panel {
    return this._panel;
  }

  set panel(value: Panel) {
    this._panel = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }


}
