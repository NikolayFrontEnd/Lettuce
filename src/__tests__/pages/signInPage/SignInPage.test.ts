import { describe, it, expect } from "vitest";

describe("SignInPage", () => {
  it("checks that email regex works correctly", () => {
    const regex = /^\S+@\S+\.\S+$/;

    const correctEmail = "user@example.com";
    const wrongEmail = "userexample.com";

    expect(regex.test(correctEmail)).toBe(true);

    expect(regex.test(wrongEmail)).toBe(false);
  });
});
