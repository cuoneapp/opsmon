import { SortOrder } from "../../util/SortOrder";

export type TicketsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
