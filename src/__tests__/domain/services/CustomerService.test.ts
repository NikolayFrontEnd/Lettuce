import { describe, it, expect, vi, beforeEach } from "vitest";
import { CustomerService } from "../../../domain/services/CustomerService";
import { customerGateway } from "../../../dataAccess/gateways/CustomerGateway";

vi.mock("../../../dataAccess/gateways/CustomerGateway", () => ({
  customerGateway: {
    getAll: vi.fn(),
  },
}));

describe("CustomerService", () => {
let service: CustomerService; 

  beforeEach(() => {  
    service = new CustomerService(); 
  });

  it("calls getAll method of customerGateway with correct arguments and once", async () => {

    await service.getAllCustomers(1, 10);

    expect(customerGateway.getAll).toHaveBeenCalledTimes(1);
    expect(customerGateway.getAll).toHaveBeenCalledWith(1, 10);
  });

  it("calls getAll with different page and limit", async () => {

    await service.getAllCustomers(2, 20);

    expect(customerGateway.getAll).toHaveBeenCalledWith(2, 20);
  });
});