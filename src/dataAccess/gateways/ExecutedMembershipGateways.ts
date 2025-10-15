import axios from "axios";
import type { MemberShipCansellationExecutedDto } from "../../domain/dtos/MembershipCancellationDto";


export class ExecutedMembershipGateways {
    async getAll(page:number, pageSize:number):Promise<MemberShipCansellationExecutedDto> {
        try{
 const { data } = await axios.get<MemberShipCansellationExecutedDto>(
        `https://dev.api.admin.lettucedispo.com/scheduled_members?status=executed&page=${page}&page_size=${pageSize}`,
      );
      return data;
        }catch(err){
      console.log(err);
      throw new Error("Failed to fetch executed membership cancellations");
        }
    }
}