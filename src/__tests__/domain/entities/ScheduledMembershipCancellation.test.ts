import { describe, it, expect } from "vitest";
import { ScheduledMembershipCancellation } from "../../../src/domain/entities/ScheduledMembershipCancellation";
import { Email } from "../../../src/domain/valueObjects/Email";

describe("ScheduledMembershipCancellation", () => {
  it("initializes correctly through constructor", () => {
    const email = new Email("test@example.com");

    const scheduled = new ScheduledMembershipCancellation(
      " 1 ",
      " Nikolay ",
      " Kozenko ",
      " 123456789 ",
      email,
      "2024-01-02T00:00:00Z"
    );

    expect(scheduled.id).toBe("1");
    expect(scheduled.firstName).toBe("Nikolay");
    expect(scheduled.lastName).toBe("Kozenko");
    expect(scheduled.phoneNumber).toBe("123456789");
    expect(scheduled.emailAddress).toBe("test@example.com");
    expect(scheduled.executedAt).toBe("2024-01-02T00:00:00Z");
  });
});
