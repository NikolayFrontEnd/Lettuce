import { describe, expect, vi,it } from "vitest";
import axios from "axios";
import { ScheduledMembershipGateway } from "../../dataAccess/gateways/ScheduledMembershipGateways";
import { ScheduledMembershipCancellation } from "../../domain/entities/ScheduledMembershipCancellation";
import { DataPage } from "../../domain/valueObjects/DataPage";
import { Email } from "../../domain/valueObjects/Email";


vi.mock("axios");

describe("ScheduledMembershipGateway", () => {
  it("getAll calls correct endpoint and constructs entities correctly", async () => {

    const mockResponse = {
      data: {
        items: [
          {
            id: "2",
            member: {
              id: "11",
              first_name: "Alice ",
              last_name: " Smith",
              email: "alice@example.com",
              phone: "987654",
            },
            executed_at: "2023-05-05T12:00:00Z",
          },
        ],
        item_count: 1,
        page: 1,
        page_count: 1,
      },
    };

    vi.mocked(axios.get).mockResolvedValue(mockResponse);

    const testBaseUrl = "http://test-api.com";
    const gateway = new ScheduledMembershipGateway(testBaseUrl);

    const result = await gateway.getAll(1, 10);

    expect(axios.get).toHaveBeenCalledWith(`${testBaseUrl}/scheduled_members`, {
      params: { status: "scheduled", page: 1, page_size: 10 },
    });

    const expectedItem = new ScheduledMembershipCancellation(
      "2",
      "Alice",
      "Smith",
      "987654",
      new Email("alice@example.com"),
      "2023-05-05T12:00:00Z"
    );

    const expectedDataPage = new DataPage([expectedItem], 1, 1, 1);

    expect(result).toEqual(expectedDataPage);
  });
});