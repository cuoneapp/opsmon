import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TicketsServiceBase } from "./base/tickets.service.base";

@Injectable()
export class TicketsService extends TicketsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
