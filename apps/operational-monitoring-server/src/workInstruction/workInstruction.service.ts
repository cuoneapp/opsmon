import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkInstructionServiceBase } from "./base/workInstruction.service.base";

@Injectable()
export class WorkInstructionService extends WorkInstructionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
