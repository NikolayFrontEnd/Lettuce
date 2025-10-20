import { describe, it, expect } from "vitest";
import { Customer } from "../../../src/domain/entities/Customer";
import { Email } from "../../../src/domain/valueObjects/Email";

describe("Customer", () => {
  it("initializes correctly through constructor", () => {
    const email = new Email("test@example.com");

    const customer = new Customer(
      "1",
      " John ",
      " Doe ",
      email,
      " 123456789 "
    );

    expect(customer.id).toBe("1");
    expect(customer.firstName).toBe("John");
    expect(customer.lastName).toBe("Doe");
    expect(customer.emailAddress).toBe("test@example.com");
    expect(customer.phoneNumber).toBe("123456789");
  });
});
