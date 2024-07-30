import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComplianceAndQualityServiceBase } from "./base/complianceAndQuality.service.base";

@Injectable()
export class ComplianceAndQualityService extends ComplianceAndQualityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
