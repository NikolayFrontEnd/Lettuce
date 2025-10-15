import { customerGateway } from "../../dataAccess/gateways/CustomerGateway";
import { Customer, type CustomerCollection } from "../entities/CustomerEntity";
import { DataPage } from "../entities/DataPage";
import { Email } from "../valueObject/Email";

export class CustomerService {
  async getAllCustomers(
    page: number,
    pageSize: number,
  ): Promise<CustomerCollection> {
    const dto = await customerGateway.getAll(page, pageSize);

    const customers = dto.items.map(
      (item) =>
        new Customer(
          item.id,
          item.first_name,
          item.last_name,
          item.email ? new Email(item.email) : null,
          item.phone_number,
        ),
    );

    return new DataPage<Customer>(
      customers,
      dto.item_count,
      dto.page,
      dto.page_count,
    );
  }
}
export const customerService = new CustomerService();
