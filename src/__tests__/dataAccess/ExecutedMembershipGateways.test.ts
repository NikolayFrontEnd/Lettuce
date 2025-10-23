import { describe, expect, vi,it } from "vitest";
import axios from "axios";
import { ExecutedMembershipGateway } from "../../dataAccess/gateways/ExecutedMembershipGateways";
import { ExecutedMembershipCancellation } from "../../domain/entities/ExecutedMembershipCancellation";
import { DataPage } from "../../domain/valueObjects/DataPage";
import { Email } from "../../domain/valueObjects/Email";

vi.mock("axios");

describe("ExecutedMembershipGateway", () => {
  it("getAll calls correct endpoint and constructs entities correctly", async () => {
    const mockResponse = {
      data: {
        items: [
          {
            id: "1",
            member: {
              id: "10",
              first_name: "John",
              last_name: "Doe",
              email: "john@example.com",
              phone: "123456",
            },
            outcome: "success",
            created_at: "2023-01-01T00:00:00Z",
          },
        ],
        item_count: 1,
        page: 1,
        page_count: 1,
      }
    };

    vi.mocked(axios.get).mockResolvedValue(mockResponse);
    vi.stubEnv('VITE_API_BASE_URL', 'http://test-api.com');

    const gateway = new ExecutedMembershipGateway();

    const expectedItem = new ExecutedMembershipCancellation(
      "1",
      "John",
      "Doe",
      "123456",
      new Email("john@example.com"),
      "success",
      "2023-01-01T00:00:00Z",
    )
    
    const expectedDataPage = new DataPage([expectedItem], 1, 1, 1);

    const result = await gateway.getAll(1, 10);

    expect(axios.get).toHaveBeenCalledWith(`http://test-api.com/scheduled_members`, {
      params: { status: "executed", page: 1, page_size: 10 },
    });

    expect(result).toEqual(expectedDataPage);
  });
});