import type { ScheduledMembershipCancelation } from "../../../../domain/entities/MembershipCansellationScheduledEntity";
import { MembershipScheduledTableHeader } from "../membershipScheduledTableHeader/MembershipScheduledTableHeader";
import { MembershipScheduledTableRow } from "../membershipScheduledTableRow/MembershipScheduledTableRow";

interface MembershipScheduledTableProp {
  data: ScheduledMembershipCancelation[];
}

export const MembershipScheduledTable = ({
  data,
}: MembershipScheduledTableProp) => {
  return (
    <>
      <MembershipScheduledTableHeader />
      {data.map((cancellation) => (
        <MembershipScheduledTableRow
          key={cancellation.id}
          cancellation={cancellation}
        />
      ))}
    </>
  );
};
