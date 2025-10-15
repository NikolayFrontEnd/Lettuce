import { executedMembershipCancelattionGateway } from "../../dataAccess/gateways/ExecutedMembershipGateways";
import type { MemberShipCansellationExecutedDto } from "../dtos/MembershipCancellationDto";
import { DataPage } from "../entities/DataPage";
import { ExecutedMembershipCancelation } from "../entities/MembershipCansellationExecutedEntity";
import { Email } from "../valueObject/Email";

export class ExecutedMembershipService {
  async getAllCustomers(
    page: number,
    pageSize: number,
  ): Promise<DataPage<ExecutedMembershipCancelation>> {
    const dto: MemberShipCansellationExecutedDto =
      await executedMembershipCancelattionGateway.getAll(page, pageSize);

    const items = dto.items.map(
      (item) =>
        new ExecutedMembershipCancelation(
          item.id,
          item.member.first_name,
          item.member.last_name,
          item.member.phone,
          item.member.email ? new Email(item.member.email) : null,
          item.outcome,
          item.created_at,
        ),
    );

    return new DataPage<ExecutedMembershipCancelation>(
      items,
      dto.item_count,
      dto.page,
      dto.page_count,
    );
  }
}

export const executedMembershipService = new ExecutedMembershipService();
