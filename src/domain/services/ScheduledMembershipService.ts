import { scheduledMembershipCancelattionGateway } from "../../dataAccess/gateways/ScheduledMembershipGateways";
import type { MemberShipCansellationScheduledDto } from "../dtos/MembershipCancellationDto";
import { DataPage } from "../entities/DataPage";
import { ScheduledMembershipCancelation } from "../entities/MembershipCansellationScheduledEntity";
import { Email } from "../valueObject/Email";

export class ScheduledMembershipService {
  async getAllCustomers(
    page: number,
    pageSize: number,
  ): Promise<DataPage<ScheduledMembershipCancelation>> {
    const dto: MemberShipCansellationScheduledDto =
      await scheduledMembershipCancelattionGateway.getAll(page, pageSize);

    const items = dto.items.map(
      (item) =>
        new ScheduledMembershipCancelation(
          item.id,
          item.member.first_name,
          item.member.last_name,
          item.member.phone,
          item.member.email ? new Email(item.member.email) : null,
          item.executed_at,
        ),
    );

    return new DataPage<ScheduledMembershipCancelation>(
      items,
      dto.item_count,
      dto.page,
      dto.page_count,
    );
  }
}

export const scheduledMembershipService = new ScheduledMembershipService();
