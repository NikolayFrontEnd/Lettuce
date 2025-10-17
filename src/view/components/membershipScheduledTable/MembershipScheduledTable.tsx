import type { ScheduledMembershipCancellation } from "../../../domain/entities/ScheduledMembershipCancellation";
import { MembershipScheduledTableHeader } from "./membershipScheduledTableHeader/MembershipScheduledTableHeader";
import { MembershipScheduledTableRow } from "./membershipScheduledTableRow/MembershipScheduledTableRow";

interface MembershipScheduledTableProps {
  data: ScheduledMembershipCancellation[];
}

export const MembershipScheduledTable = ({
  data,
}: MembershipScheduledTableProps) => {
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
