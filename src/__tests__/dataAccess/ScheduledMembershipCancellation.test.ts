import { describe, expect, vi, it, beforeEach } from "vitest";
import axios from "axios";
import { ScheduledMembershipGateway } from "../../dataAccess/gateways/ScheduledMembershipGateways";
import { ScheduledMembershipCancellation } from "../../domain/entities/ScheduledMembershipCancellation";
import { DataPage } from "../../domain/valueObjects/DataPage";
import { Email } from "../../domain/valueObjects/Email";

vi.mock("axios");

describe("ScheduledMembershipGateway", () => {
  const mockedBaseUrl = "http://test-api.com";
  const mockedPath = "scheduled_members";
  const mockedStatus = "scheduled";

  const mockedId = "2";
  const mockedMemberId = "11";
  const mockedFirstName = "Alice";
  const mockedLastName = "Smith";
  const mockedEmailValue = "alice@example.com";
  const mockedEmail = new Email(mockedEmailValue);
  const mockedPhone = "987654";
  const mockedExecutedAt = "2023-05-05T12:00:00Z";

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
            executed_at: mockedExecutedAt,
          },
        ],
        item_count: mockedItemCount,
        page: mockedPageNumber,
        page_count: mockedPageCount,
      },
    };

    vi.mocked(axios.get).mockResolvedValue(mockedResponse);

    const expectedItem = new ScheduledMembershipCancellation(
      mockedId,
      mockedFirstName,
      mockedLastName,
      mockedPhone,
      mockedEmail,
      mockedExecutedAt
    );

    const gateway = new ScheduledMembershipGateway();

    const expectedDataPage = new DataPage([expectedItem], mockedItemCount, mockedPageNumber, mockedPageCount);

    const result = await gateway.getAll(mockedPageNumber, mockedPageSize);

    expect(axios.get).toHaveBeenCalledWith(`${mockedBaseUrl}/${mockedPath}`, {
      params: { status: mockedStatus, page: mockedPageNumber, page_size: mockedPageSize },
    });

    expect(result).toStrictEqual(expectedDataPage);
  });
});