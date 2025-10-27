import { describe, expect, vi, it, beforeEach } from "vitest";
import axios from "axios";
import { ExecutedMembershipGateway } from "../../dataAccess/gateways/ExecutedMembershipGateways";
import { ExecutedMembershipCancellation } from "../../domain/entities/ExecutedMembershipCancellation";
import { DataPage } from "../../domain/valueObjects/DataPage";
import { Email } from "../../domain/valueObjects/Email";

vi.mock("axios");

describe("ExecutedMembershipGateway", () => {
  const mockedBaseUrl = "http://test-api.com";
  const mockedPath = "scheduled_members";
  const mockedStatus = "executed";

  const mockedId = "1";
  const mockedMemberId = "10";
  const mockedFirstName = "John";
  const mockedLastName = "Doe";
  const mockedEmailValue = "john@example.com";
  const mockedEmail = new Email(mockedEmailValue);
  const mockedPhone = "123456";
  const mockedOutcome = "success";
  const mockedCreatedAt = "2023-01-01T00:00:00Z";

  const mockedItemCount = 1;
  const mockedPageNumber = 1;
  const mockedPageSize = 10;
  const mockedPageCount = 1;

  beforeEach(() => {
    vi.stubEnv("VITE_API_BASE_URL", mockedBaseUrl);
  });

  it("getAll calls correct endpoint and constructs entities correctly", async () => {
    const mockedResponse = {
      data: {
        items: [
          {
            id: mockedId,
            member: {
              id: mockedMemberId,
              first_name: mockedFirstName,
              last_name: mockedLastName,
              email: mockedEmailValue,
              phone: mockedPhone,
            },
            outcome: mockedOutcome,
            created_at: mockedCreatedAt,
          },
        ],
        item_count: mockedItemCount,
        page: mockedPageNumber,
        page_count: mockedPageCount,
      },
    };

    vi.mocked(axios.get).mockResolvedValue(mockedResponse);

    const expectedItem = new ExecutedMembershipCancellation(
      mockedId,
      mockedFirstName,
      mockedLastName,
      mockedPhone,
      mockedEmail,
      mockedOutcome,
      mockedCreatedAt
    );

    const gateway = new ExecutedMembershipGateway();

    const expectedDataPage = new DataPage([expectedItem], mockedItemCount, mockedPageNumber, mockedPageCount);

    const result = await gateway.getAll(mockedPageNumber, mockedPageSize);

    expect(axios.get).toHaveBeenCalledWith(`${mockedBaseUrl}/${mockedPath}`, {
      params: { status: mockedStatus, page: mockedPageNumber, page_size: mockedPageSize },
    });

    expect(result).toStrictEqual(expectedDataPage);
  });
});