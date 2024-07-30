import { SortOrder } from "../../util/SortOrder";

export type ProjectsOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};