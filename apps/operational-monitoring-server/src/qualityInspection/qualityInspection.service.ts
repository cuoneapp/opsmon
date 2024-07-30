import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QualityInspectionServiceBase } from "./base/qualityInspection.service.base";

@Injectable()
export class QualityInspectionService extends QualityInspectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
