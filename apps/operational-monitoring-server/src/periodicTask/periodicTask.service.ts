import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PeriodicTaskServiceBase } from "./base/periodicTask.service.base";

@Injectable()
export class PeriodicTaskService extends PeriodicTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
