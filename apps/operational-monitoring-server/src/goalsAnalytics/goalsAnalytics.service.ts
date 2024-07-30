import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GoalsAnalyticsServiceBase } from "./base/goalsAnalytics.service.base";

@Injectable()
export class GoalsAnalyticsService extends GoalsAnalyticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
