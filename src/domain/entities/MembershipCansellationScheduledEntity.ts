import { Email } from "../valueObject/Email";

export class ScheduledMembershipCancelation {
  private _id: string;
  private _firstName: string;
  private _lastName: string;
  private _phoneNumber: string;
  private _emailAddress: Email | null;
  private _executedAt?: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    emailAddress: Email | null,
    executedAt?: string,
  ) {
    this._id = id.trim();
    this._firstName = firstName.trim();
    this._lastName = lastName.trim();
    this._phoneNumber = phoneNumber.trim();
    this._emailAddress = emailAddress;
    this._executedAt = executedAt;
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

  get emailAddress(): string | null {
    return this._emailAddress ? this._emailAddress.toString() : null;
  }

  get executedAt(): string | undefined {
    return this._executedAt;
  }
}


