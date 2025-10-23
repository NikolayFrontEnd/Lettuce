import { describe, it, expect } from "vitest";
import { Email } from "../../../src/domain/valueObjects/Email";

describe("Email", () => {
  it("creates Email object correctly with valid email", () => {
    const email = new Email("test@example.com");
    expect(email.toString()).toBe("test@example.com");
  });

  it("throws error when email is invalid", () => {
    expect(() => new Email("wrong-email")).toThrowError("Wrong email format");
    expect(() => new Email("")).toThrowError("Wrong email format");
  });
});
