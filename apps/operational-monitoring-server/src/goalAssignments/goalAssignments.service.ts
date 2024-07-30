import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GoalAssignmentsServiceBase } from "./base/goalAssignments.service.base";

@Injectable()
export class GoalAssignmentsService extends GoalAssignmentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
