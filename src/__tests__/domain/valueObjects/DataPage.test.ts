import { describe, it, expect } from "vitest";
import { DataPage } from "../../../domain/valueObjects/DataPage";

describe("DataPage", () => {
  it("initializes correctly through constructor", () => {
    const items = [
      { id: "1", first_name: "John", last_name: "Doe", email: "john@example.com", phone_number: "12345" },
      { id: "2", first_name: "Jane", last_name: "Smith", email: "jane@example.com", phone_number: "67890" },
    ];

    const dataPage = new DataPage(items, 2, 1, 1);

    expect(dataPage.items).toEqual(items);
    expect(dataPage.itemCount).toBe(2);
    expect(dataPage.page).toBe(1);
    expect(dataPage.pageCount).toBe(1);
  });
});
