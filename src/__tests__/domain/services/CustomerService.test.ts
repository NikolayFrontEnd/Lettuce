import { describe, it, expect, vi } from "vitest";
import { CustomerService } from "../../../src/domain/services/CustomerService";
import { customerGateway } from "../../../src/dataAccess/gateways/CustomerGateway";

vi.mock("../../../src/dataAccess/gateways/CustomerGateway", () => ({
  customerGateway: {
    getAll: vi.fn(),
  },
}));

describe("CustomerService", () => {
  it("calls getAll method of customerGateway with correct arguments and once", async () => {
    const service = new CustomerService();

    await service.getAllCustomers(1, 10);

    expect(customerGateway.getAll).toHaveBeenCalledTimes(1);
    expect(customerGateway.getAll).toHaveBeenCalledWith(1, 10);
  });
});