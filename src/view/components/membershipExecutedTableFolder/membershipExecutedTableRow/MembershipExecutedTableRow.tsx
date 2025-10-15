import type { ExecutedMembershipCancelation } from "../../../../domain/entities/MembershipCansellationExecutedEntity";
import style from "./MembershipExecutedTableRow.module.css";

interface MembershipExecutedTableRowProps {
  data: ExecutedMembershipCancelation;
}

export const MembershipExecutedTableRow = ({
  data,
}: MembershipExecutedTableRowProps) => {
  const getStatusClass = (outcome: string) => {
    const base = style.usertable__cell__status__circle;
    return `${base} ${
      outcome === "success"
        ? style.usertable__cell__status__circle__success
        : style.usertable__cell__status__circle__failed
    }`;
  };

  return (
    <div className={style.usertable__userblock}>
      <div className={style.usertable__cell}>
        {data.firstName} {data.lastName}
      </div>
      <div className={style.usertable__cell}>{data.phoneNumber}</div>
      <div className={style.usertable__cell}>{data.emailAddressString}</div>
      <div className={style.usertable__cell}>{data.createdAt}</div>
      <div className={style.usertable__cell__status}>
        <div className={getStatusClass(data.outcome)}>{data.outcome}</div>
      </div>
    </div>
  );
};
