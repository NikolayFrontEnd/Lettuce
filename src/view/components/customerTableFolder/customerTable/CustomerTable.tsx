import type { Customer } from "../../../../domain/entities/CustomerEntity";
import { CustomerTableHeader } from "../customerTableHeader/CustomerTableHeader";
import { CustomerTableRow } from "../customerTableRow/CustomerTableRow";

interface CustomerTableProp {
  data: Customer[];
}

export const CustomerTable = ({ data }: CustomerTableProp) => {
  return (
    <>
      <CustomerTableHeader />
      {data.map((customer) => (
        <CustomerTableRow key={customer.id} customer={customer} />
      ))}{" "}
    </>
  );
};
