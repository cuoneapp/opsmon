import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExecutiveSummaryServiceBase } from "./base/executiveSummary.service.base";

@Injectable()
export class ExecutiveSummaryService extends ExecutiveSummaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
