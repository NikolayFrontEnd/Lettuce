import { Email } from "../valueObject/Email";

export class ExecutedMembershipCancellation {
  private _id: string;
  private _firstName: string;
  private _lastName: string;
  private _phoneNumber: string;
  private _emailAddress: Email | null;
  private _outcome: string;
  private _createdAt: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    emailAddress: Email | null,
    outcome: string,
    createdAt: string,
  ) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._phoneNumber = phoneNumber;
    this._emailAddress = emailAddress;
    this._outcome = outcome;
    this._createdAt = createdAt;
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

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  get emailAddressString(): string | null {
    return this._emailAddress ? this._emailAddress.toString() : null;
  }
  
  get outcome(): string {
    return this._outcome;
  }

  get createdAt(): string {
    return new Date(this._createdAt).toLocaleDateString();
  }
}
