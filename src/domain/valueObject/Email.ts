export class Email {
  private readonly value: string;

  constructor(value: string) {
    if (!this.isValid(value)) {
      throw new Error("Wrong email format");
    }
    this.value = value;
  }

  toString(): string {
    return this.value;
  }

  private isValid(value: string): boolean {
    if (!value.trim()) {
      return false;
    }
return /.+@.+/.test(value);  }
}
