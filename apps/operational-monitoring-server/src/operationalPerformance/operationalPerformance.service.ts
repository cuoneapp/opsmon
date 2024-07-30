import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OperationalPerformanceServiceBase } from "./base/operationalPerformance.service.base";

@Injectable()
export class OperationalPerformanceService extends OperationalPerformanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
