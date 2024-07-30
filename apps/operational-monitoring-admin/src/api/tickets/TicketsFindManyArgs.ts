import { TicketsWhereInput } from "./TicketsWhereInput";
import { TicketsOrderByInput } from "./TicketsOrderByInput";

export type TicketsFindManyArgs = {
  where?: TicketsWhereInput;
  orderBy?: Array<TicketsOrderByInput>;
  skip?: number;
  take?: number;
};
