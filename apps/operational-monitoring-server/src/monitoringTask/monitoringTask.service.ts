import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MonitoringTaskServiceBase } from "./base/monitoringTask.service.base";

@Injectable()
export class MonitoringTaskService extends MonitoringTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
