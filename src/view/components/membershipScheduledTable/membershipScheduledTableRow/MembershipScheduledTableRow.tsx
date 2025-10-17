import type { ScheduledMembershipCancellation } from "../../../../domain/entities/ScheduledMembershipCancellation";
import style from "./MembershipScheduledTableRow.module.css";

interface MembershipScheduledTableRowProps {
  cancellation: ScheduledMembershipCancellation;
}

export const MembershipScheduledTableRow = ({
  cancellation,
}: MembershipScheduledTableRowProps) => {
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
