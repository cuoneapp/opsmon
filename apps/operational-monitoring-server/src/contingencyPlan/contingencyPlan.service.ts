import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContingencyPlanServiceBase } from "./base/contingencyPlan.service.base";

@Injectable()
export class ContingencyPlanService extends ContingencyPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
