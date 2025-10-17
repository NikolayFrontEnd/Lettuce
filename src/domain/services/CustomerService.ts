import { customerGateway } from "../../dataAccess/gateways/CustomerGateway";
import type { Customer } from "../entities/Customer";
import type { DataPage } from "../valueObject/DataPage";


export class CustomerService {
  async getAllCustomers(page: number, pageSize: number): Promise<DataPage<Customer>> {
    return  customerGateway.getAll(page, pageSize);
  }
}

export const customerService = new CustomerService();

