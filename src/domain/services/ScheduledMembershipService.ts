import { scheduledMembershipCancelattionGateway } from "../../dataAccess/gateways/ScheduledMembershipGateways";
import type { ScheduledMembershipCancellation } from "../entities/ScheduledMembershipCancellation";
import { DataPage } from "../valueObject/DataPage";

export class ScheduledMembershipService {
  async getAllCustomers(
    page: number,
    pageSize: number,
  ): Promise<DataPage<ScheduledMembershipCancellation>> {
    return scheduledMembershipCancelattionGateway.getAll(page, pageSize);
  }
}

export const scheduledMembershipService = new ScheduledMembershipService();
