import type { ScheduledMembershipCancelation } from "../../../../domain/entities/MembershipCansellationScheduledEntity";
import style from "./MembershipScheduledTableRow.module.css";

interface MembershipScheduledTableRowProp {
  cancellation: ScheduledMembershipCancelation;
}

export const MembershipScheduledTableRow = ({
  cancellation,
}: MembershipScheduledTableRowProp) => {
  return (
    <div className={style.usertable__userblock}>
      <div className={style.usertable__cell}>
        {cancellation.firstName} {cancellation.lastName}
      </div>
      <div className={style.table__cell}>{cancellation.phoneNumber}</div>
      <div className={style.table__cell}>{cancellation.emailAddress}</div>
      <div className={style.table__cell}>{cancellation.executedAt}</div>
    </div>
  );
};
