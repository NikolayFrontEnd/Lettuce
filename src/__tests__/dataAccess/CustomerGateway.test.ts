
import { describe, expect, vi,it } from "vitest";
import axios from "axios";
import { Customer } from "../../domain/entities/Customer";
import { CustomerGateway } from "../../dataAccess/gateways/CustomerGateway";
import { DataPage } from "../../domain/valueObjects/DataPage";
import { Email } from "../../domain/valueObjects/Email";

vi.mock("axios");

describe("CustomerGateway", () => {
  it("getAll calls correct endpoint and make entity correctly from JSON", async () => {
    const mockResponse = {
      data: {
        items: [
          {
            id: "1",
            first_name: "John",
            last_name: " Doe",
            email: "mail@example.com",
            phone_number: "123456789",
          },
        ],
        item_count: 1,
        page: 1,
        page_count: 1,
      },
    };

    vi.mocked(axios.get).mockResolvedValue(mockResponse);

    const testBaseUrl = "http://test-api.com";
    const gateway = new CustomerGateway(testBaseUrl);

    const result = await gateway.getAll(1, 10);

    expect(axios.get).toHaveBeenCalledWith(`${testBaseUrl}/members`, {
      params: {
        search_text: "",
        page: 1,
        page_size: 10,
      }
    })

    const expectedCustomer = new Customer(
      "1",
      "John",
      "Doe",
      new Email("mail@example.com"),
      "123456789"
    );

    const expectedDataPage = new DataPage<Customer>(
      [expectedCustomer],
      1,
      1,
      1
    );

    expect(result).toEqual(expectedDataPage);
  });
});
