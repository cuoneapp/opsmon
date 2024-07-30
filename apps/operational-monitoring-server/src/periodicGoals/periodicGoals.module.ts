import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PeriodicGoalsModuleBase } from "./base/periodicGoals.module.base";
import { PeriodicGoalsService } from "./periodicGoals.service";
import { PeriodicGoalsController } from "./periodicGoals.controller";
import { PeriodicGoalsResolver } from "./periodicGoals.resolver";

@Module({
  imports: [PeriodicGoalsModuleBase, forwardRef(() => AuthModule)],
  controllers: [PeriodicGoalsController],
  providers: [PeriodicGoalsService, PeriodicGoalsResolver],
  exports: [PeriodicGoalsService],
})
export class PeriodicGoalsModule {}
