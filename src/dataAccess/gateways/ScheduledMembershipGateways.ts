import axios from "axios";
import type { MemberShipCansellationScheduledDto } from "../../domain/dtos/MembershipCancellationDto";

export class ScheduledMembershipCancelattionGateway {
  async getAll(
    page: number,
    pageSize: number,
  ): Promise<MemberShipCansellationScheduledDto> {
    try {
      const { data } = await axios.get<MemberShipCansellationScheduledDto>(
        `https://dev.api.admin.lettucedispo.com/scheduled_members?status=scheduled&page=${page}&page_size=${pageSize}`,
      );
      return data;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch scheduled memberships");
    }
  }
}
export const scheduledMembershipCancelattionGateway =
  new ScheduledMembershipCancelattionGateway();
