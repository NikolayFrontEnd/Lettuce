import { describe, it, expect } from "vitest";
import { ExecutedMembershipCancellation } from "../../../src/domain/entities/ExecutedMembershipCancellation";
import { Email } from "../../../src/domain/valueObjects/Email";

describe("ExecutedMembershipCancellation", () => {
  it("initializes correctly through constructor", () => {
    const email = new Email("test@example.com");

    const executed = new ExecutedMembershipCancellation(
      "1",
      "John",
      "Doe",
      "123456789",
      email,
      "success",
      "2024-01-01T00:00:00Z"
    );

    expect(executed.id).toBe("1");
    expect(executed.firstName).toBe("John");
    expect(executed.lastName).toBe("Doe");
    expect(executed.phoneNumber).toBe("123456789");
    expect(executed.emailAddressString).toBe("test@example.com");
    expect(executed.outcome).toBe("success");
    expect(executed.createdAt).toBe(new Date("2024-01-01T00:00:00Z").toLocaleDateString());
  });
});
 