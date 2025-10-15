export interface CustomersDto {
  items: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
  }[];
  item_count: number;
  page: number;
  page_count: number;
}
