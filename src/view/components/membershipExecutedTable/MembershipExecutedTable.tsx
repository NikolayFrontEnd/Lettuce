import type { ExecutedMembershipCancellation } from "../../../domain/entities/ExecutedMembershipCancellation";
import { MembershipExecutedTableHeader } from "./membershipExecutedTableHeader/MembershipExecutedTableHeader";
import { MembershipExecutedTableRow } from "./membershipExecutedTableRow/MembershipExecutedTableRow";

interface MembershipExecutedTableProps {
  data: ExecutedMembershipCancellation[];
}

export const MembershipExecutedTable = ({
  data,
}: MembershipExecutedTableProps) => {
  return (
    <>
      <MembershipExecutedTableHeader />
      {data.map((item) => (
        <MembershipExecutedTableRow key={item.id} data={item} />
      ))}
    </>
  );
};
