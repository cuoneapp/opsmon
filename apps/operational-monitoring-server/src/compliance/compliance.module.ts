import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComplianceModuleBase } from "./base/compliance.module.base";
import { ComplianceService } from "./compliance.service";
import { ComplianceController } from "./compliance.controller";
import { ComplianceResolver } from "./compliance.resolver";

@Module({
  imports: [ComplianceModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComplianceController],
  providers: [ComplianceService, ComplianceResolver],
  exports: [ComplianceService],
})
export class ComplianceModule {}
