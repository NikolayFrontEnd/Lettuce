import { describe, it, expect, vi } from "vitest";
import { ScheduledMembershipService } from "../../../domain/services/ScheduledMembershipService";
import { scheduledMembershipCancelattionGateway } from "../../../dataAccess/gateways/ScheduledMembershipGateways";

vi.mock("../../../src/dataAccess/gateways/ScheduledMembershipGateways", () => ({
  scheduledMembershipCancelattionGateway: {
    getAll: vi.fn(),
  },
}));

describe("ScheduledMembershipService", () => {
  it("calls getAll method of scheduledMembershipCancelattionGateway with correct arguments and once", async () => {
    const service = new ScheduledMembershipService();

    await service.getAllCustomers(1, 10);

    expect(scheduledMembershipCancelattionGateway.getAll).toHaveBeenCalledTimes(1);
    expect(scheduledMembershipCancelattionGateway.getAll).toHaveBeenCalledWith(1, 10);
  });
});
