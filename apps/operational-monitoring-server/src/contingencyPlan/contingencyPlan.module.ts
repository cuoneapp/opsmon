import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContingencyPlanModuleBase } from "./base/contingencyPlan.module.base";
import { ContingencyPlanService } from "./contingencyPlan.service";
import { ContingencyPlanController } from "./contingencyPlan.controller";
import { ContingencyPlanResolver } from "./contingencyPlan.resolver";

@Module({
  imports: [ContingencyPlanModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContingencyPlanController],
  providers: [ContingencyPlanService, ContingencyPlanResolver],
  exports: [ContingencyPlanService],
})
export class ContingencyPlanModule {}
