import type { Customer } from "../../../../domain/entities/CustomerEntity";
import style from "./CustomerTableRow.module.css";

interface CustomerTableRowProp {
  customer: Customer;
}

export const CustomerTableRow = ({ customer }: CustomerTableRowProp) => {
  return (
    <div className={style.usertable__userblock}>
      <div className={style.usertable__cell}>
        {customer.firstName} {customer.lastName}
      </div>
      <div className={style.table__cell}>{customer.phoneNumber}</div>
      <div className={style.table__cell}>{customer.emailAddress}</div>
      <div className={style.table__cell}>
        <button>Cancel Membership</button>
      </div>
    </div>
  );
};
