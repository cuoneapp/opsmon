import { Tickets as TTickets } from "../api/tickets/Tickets";

export const TICKETS_TITLE_FIELD = "id";

export const TicketsTitle = (record: TTickets): string => {
  return record.id?.toString() || String(record.id);
};
