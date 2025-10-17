import axios from "axios";
import type { MemberShipExecutedDto } from "../dtos/MembershipCancellationDto";
import { Email } from "../../domain/valueObject/Email";
import { DataPage } from "../../domain/valueObject/DataPage";
import { ExecutedMembershipCancellation } from "../../domain/entities/ExecutedMembershipCancellation";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export class ExecutedMembershipGateways {
  async getAll(
    page: number,
    pageSize: number,
  ): Promise<DataPage<ExecutedMembershipCancellation>> {
    try {
      const { data } = await axios.get<MemberShipExecutedDto>(
        `${API_BASE_URL}/scheduled_members`,
        {
          params: {
            status: "executed",
            page,
            page_size: pageSize,
          },
        }
      );

      const items = data.items.map((item) => {
        const email = item.member.email ? new Email(item.member.email) : null;
        return new ExecutedMembershipCancellation(
          item.id,
          item.member.first_name,
          item.member.last_name,
          item.member.phone,
          email,
          item.outcome,
          item.created_at,
        );
      });

      return new DataPage<ExecutedMembershipCancellation>(
        items,
        data.item_count,
        data.page,
        data.page_count,
      );
    } catch {
      throw new Error("Failed to fetch executed membership cancellations");
    }
  }
}
export const executedMembershipCancelattionGateway =
  new ExecutedMembershipGateways();
