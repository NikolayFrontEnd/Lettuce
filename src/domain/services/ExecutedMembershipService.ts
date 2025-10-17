import { executedMembershipCancelattionGateway } from "../../dataAccess/gateways/ExecutedMembershipGateways";
import type { ExecutedMembershipCancellation } from "../entities/ExecutedMembershipCancellation";
import { DataPage } from "../valueObject/DataPage";

export class ExecutedMembershipService {
  async getAllCustomers(
    page: number,
    pageSize: number,
  ): Promise<DataPage<ExecutedMembershipCancellation>> {
    return executedMembershipCancelattionGateway.getAll(page, pageSize);
  }
}

export const executedMembershipService = new ExecutedMembershipService();
