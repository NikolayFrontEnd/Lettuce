export interface MemberShipCansellationScheduledDto {
  items: {
    id: string;
    member: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
    };
    status: string;
    outcome: string;
    remove_at: string;
    created_at: string;
    executed_at?: string;
  }[];
  item_count: number;
  page: number;
  page_count: number;
}

export interface MemberShipCansellationExecutedDto {
  items: {
    id: string;
    member: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
    };
    status: string;
    outcome: string;
    remove_at: string;
    created_at: string;
    executed_at?: string;
  }[];
  item_count: number;
  page: number;
  page_count: number;
}
