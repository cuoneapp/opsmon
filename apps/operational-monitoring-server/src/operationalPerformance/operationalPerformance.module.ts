import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OperationalPerformanceModuleBase } from "./base/operationalPerformance.module.base";
import { OperationalPerformanceService } from "./operationalPerformance.service";
import { OperationalPerformanceController } from "./operationalPerformance.controller";
import { OperationalPerformanceResolver } from "./operationalPerformance.resolver";

@Module({
  imports: [OperationalPerformanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [OperationalPerformanceController],
  providers: [OperationalPerformanceService, OperationalPerformanceResolver],
  exports: [OperationalPerformanceService],
})
export class OperationalPerformanceModule {}
