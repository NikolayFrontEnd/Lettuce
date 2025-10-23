import axios from "axios";
import type { MemberShipScheduledDto } from "../dtos/MembershipCancellationDto";
import { Email } from "../../domain/valueObjects/Email";
import { DataPage } from "../../domain/valueObjects/DataPage";
import { ScheduledMembershipCancellation } from "../../domain/entities/ScheduledMembershipCancellation";


export class ScheduledMembershipGateway {

  private readonly API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  async getAll(
    page: number,
    pageSize: number,
  ): Promise<DataPage<ScheduledMembershipCancellation>> {
    try {
      const { data } = await axios.get<MemberShipScheduledDto>(
        `${this.API_BASE_URL}/scheduled_members`,
        {
          params: {
            status: "scheduled",
            page,
            page_size: pageSize,
          },
        }
      );

      const items = data.items.map((item) => {
        const email = item.member.email ? new Email(item.member.email) : null;
        return new ScheduledMembershipCancellation(
          item.id,
          item.member.first_name,
          item.member.last_name,
          item.member.phone,
          email,
          item.executed_at,
        );
      });

      return new DataPage<ScheduledMembershipCancellation>(
        items,
        data.item_count,
        data.page,
        data.page_count,
      );
    } catch {
      throw new Error("Failed to fetch scheduled memberships");
    }
  }
}
export const scheduledMembershipCancelattionGateway =
  new ScheduledMembershipGateway();
