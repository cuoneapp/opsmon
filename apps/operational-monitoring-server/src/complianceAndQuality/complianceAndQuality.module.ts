import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComplianceAndQualityModuleBase } from "./base/complianceAndQuality.module.base";
import { ComplianceAndQualityService } from "./complianceAndQuality.service";
import { ComplianceAndQualityController } from "./complianceAndQuality.controller";
import { ComplianceAndQualityResolver } from "./complianceAndQuality.resolver";

@Module({
  imports: [ComplianceAndQualityModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComplianceAndQualityController],
  providers: [ComplianceAndQualityService, ComplianceAndQualityResolver],
  exports: [ComplianceAndQualityService],
})
export class ComplianceAndQualityModule {}
