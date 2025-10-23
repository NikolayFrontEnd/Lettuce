import axios from "axios";
import type { CustomersDto } from "../dtos/CustomerDto";
import { Email } from "../../domain/valueObjects/Email";
import { Customer } from "../../domain/entities/Customer";
import { DataPage } from "../../domain/valueObjects/DataPage";

export class CustomerGateway {

private API_BASE_URL: string;

   constructor(baseUrl?: string) {
    this.API_BASE_URL = baseUrl || import.meta.env.VITE_API_BASE_URL || '';
  } 

  async getAll(page: number, pageSize: number): Promise<DataPage<Customer>> {

    try {
      const { data } = await axios.get<CustomersDto>(
      `${this.API_BASE_URL}/members`,
      {
        params:{
          search_text:"",
          page:page,
          page_size:pageSize,
        },
      }
      );
     
const customers = data.items.map((item) => {
        const email = item.email ? new Email(item.email) : null;
        return new Customer(
          item.id,
          item.first_name,
          item.last_name,
          email,
          item.phone_number,
        );
      });

      return new DataPage<Customer>(
        customers,
        data.item_count,
        data.page,
        data.page_count,
      );

    } catch (err) {
      throw new Error("Failed to fetch customers");
    }
  }
}
export const customerGateway = new CustomerGateway();


