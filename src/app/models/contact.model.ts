export class Contact {
  private _email: string;
  private _address:string;
  private _zip:number;

  get zip(): number {
    return this._zip;
  }

  set zip(value: number) {
    this._zip = value;
  }
  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }
  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
