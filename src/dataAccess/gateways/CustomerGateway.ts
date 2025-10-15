import axios from "axios";
import type { CustomersDto } from "../../domain/dtos/CustomerDto";
export class CustomerGateway {
  async getAll(page: number, pageSize: number): Promise<CustomersDto> {
    try {
      const { data } = await axios.get<CustomersDto>(
        `https://dev.api.admin.lettucedispo.com/members?search_text=%22%22&page=${page}&page_size=${pageSize}`,
      );
      return data;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch customers");
    }
  }
}
export const customerGateway = new CustomerGateway();
