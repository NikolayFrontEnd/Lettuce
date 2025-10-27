import { describe, expect, vi, it, beforeEach } from "vitest";
import axios from "axios";
import { Customer } from "../../domain/entities/Customer";
import { CustomerGateway } from "../../dataAccess/gateways/CustomerGateway";
import { DataPage } from "../../domain/valueObjects/DataPage";
import { Email } from "../../domain/valueObjects/Email";

vi.mock("axios");

describe("CustomerGateway", () => {
  const mockedBaseUrl = "http://test-api.com";
  const mockedPath = "members";

  const mockedId = "1";
  const mockedFirstName = "John";
  const mockedLastName = "Doe";
  const mockedEmailValue = "mail@example.com";
  const mockedEmail = new Email(mockedEmailValue);
  const mockedPhoneNumber = "123456789";

  const mockedSearchText = "";
  const mockedPageNumber = 1;
  const mockedPageSize = 10;
  const mockedItemCount = 1;
  const mockedPageCount = 1;

  beforeEach(() => {
    vi.stubEnv("VITE_API_BASE_URL", mockedBaseUrl);
  });

  it("getAll calls correct endpoint and make entity correctly from JSON", async () => {
    const mockedResponse = {
      data: {
        items: [
          {
            id: mockedId,
            first_name: mockedFirstName,
            last_name: mockedLastName,
            email: mockedEmailValue,
            phone_number: mockedPhoneNumber,
          },
        ],
        item_count: mockedItemCount,
        page: mockedPageNumber,
        page_count: mockedPageCount,
      },
    };

    vi.mocked(axios.get).mockResolvedValue(mockedResponse);

    const gateway = new CustomerGateway();

    const expectedCustomer = new Customer(
      mockedId,
      mockedFirstName,
      mockedLastName,
      mockedEmail,
      mockedPhoneNumber
    );

    const expectedDataPage = new DataPage<Customer>(
      [expectedCustomer],
      mockedItemCount,
      mockedPageNumber,
      mockedPageCount
    );

    const result = await gateway.getAll(mockedPageNumber, mockedPageSize);

    expect(axios.get).toHaveBeenCalledWith(`${mockedBaseUrl}/${mockedPath}`, {
      params: {
        search_text: mockedSearchText,
        page: mockedPageNumber,
        page_size: mockedPageSize,
      },
    });

    expect(result).toStrictEqual(expectedDataPage);
  });
});