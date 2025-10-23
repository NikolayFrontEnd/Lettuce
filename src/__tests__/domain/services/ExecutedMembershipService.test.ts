import { describe, it, expect, vi } from "vitest";
import { ExecutedMembershipService } from "../../../domain/services/ExecutedMembershipService";
import { executedMembershipCancelattionGateway } from "../../../dataAccess/gateways/ExecutedMembershipGateways";


vi.mock("../../../src/dataAccess/gateways/ExecutedMembershipGateways", () => ({
  executedMembershipCancelattionGateway: {
    getAll: vi.fn(),
  },
}));

describe("ExecutedMembershipService", () => {
  it("calls getAll method of executedMembershipCancelattionGateway with correct arguments and once", async () => {
    const service = new ExecutedMembershipService();

    await service.getAllCustomers(1, 10);

    expect(executedMembershipCancelattionGateway.getAll).toHaveBeenCalledTimes(1);
    expect(executedMembershipCancelattionGateway.getAll).toHaveBeenCalledWith(1, 10);
  });
});
