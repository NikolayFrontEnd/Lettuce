import { describe, it, expect } from "vitest";
import { Email } from "../../../domain/valueObjects/Email";

describe("Email", () => {
  it("creates Email object correctly with valid email", () => {
    const email = new Email("test@example.com");
    expect(email.toString()).toBe("test@example.com");
  });

  describe("throws error when email is invalid", () => {
    const invalidCases = [
      { input: "wrong-email", expectedError: "Wrong email format" },
      { input: "", expectedError: "Wrong email format" },
      { input: "a@b", expectedError: "Wrong email format" },
      { input: "@example.com", expectedError: "Wrong email format" },
      { input: "test@", expectedError: "Wrong email format" },
    ];

    it.each(invalidCases)(
      "throws warnin for input input",
      ({ input, expectedError }) => {
        expect(() => new Email(input)).toThrowError(expectedError);
      }
    );
  });
});
