import type { ExecutedMembershipCancelation } from "../../../../domain/entities/MembershipCansellationExecutedEntity";
import { MembershipExecutedTableHeader } from "../membershipExecutedTableHeader/MembershipExecutedTableHeader";
import { MembershipExecutedTableRow } from "../membershipExecutedTableRow/MembershipExecutedTableRow";

interface MembershipExecutedTableProps {
  data: ExecutedMembershipCancelation[];
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
