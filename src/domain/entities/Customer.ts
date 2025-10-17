import { Email } from "../valueObject/Email";

export class Customer {
  private _id: string;
  private _firstName: string;
  private _lastName: string;
  private _emailAddress: Email | null;
  private _phoneNumber: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    emailAddress: Email | null,
    phoneNumber: string,
  ) {
    this._id = id;
    this._firstName = firstName.trim();
    this._lastName = lastName.trim();
    this._emailAddress = emailAddress;
    this._phoneNumber = phoneNumber.trim();
  }

  get id(): string {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get emailAddress(): string | null {
    return this._emailAddress ? this._emailAddress.toString() : null;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }
}

