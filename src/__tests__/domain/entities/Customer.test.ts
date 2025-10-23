import { describe, it, expect } from "vitest";
import { Email } from "../../../domain/valueObjects/Email";
import { Customer } from "../../../domain/entities/Customer";


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
