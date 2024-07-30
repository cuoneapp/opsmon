import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PeriodicGoalsServiceBase } from "./base/periodicGoals.service.base";

@Injectable()
export class PeriodicGoalsService extends PeriodicGoalsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
