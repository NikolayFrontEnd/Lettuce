import type { Customer } from "../../../domain/entities/Customer";
import { CustomerTableHeader } from "./customerTableHeader/CustomerTableHeader";
import { CustomerTableRow } from "./customerTableRow/CustomerTableRow";


interface CustomerTableProps {
  data: Customer[];
}

export const CustomerTable = ({ data }: CustomerTableProps) => {
  return (
    <>
      <CustomerTableHeader />
      {data.map((customer) => (
        <CustomerTableRow key={customer.id} customer={customer} />
      ))}{" "}
    </>
  );
};
