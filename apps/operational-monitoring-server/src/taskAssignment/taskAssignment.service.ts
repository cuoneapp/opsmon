import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskAssignmentServiceBase } from "./base/taskAssignment.service.base";

@Injectable()
export class TaskAssignmentService extends TaskAssignmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
