import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GoalsAnalyticsModuleBase } from "./base/goalsAnalytics.module.base";
import { GoalsAnalyticsService } from "./goalsAnalytics.service";
import { GoalsAnalyticsController } from "./goalsAnalytics.controller";
import { GoalsAnalyticsResolver } from "./goalsAnalytics.resolver";

@Module({
  imports: [GoalsAnalyticsModuleBase, forwardRef(() => AuthModule)],
  controllers: [GoalsAnalyticsController],
  providers: [GoalsAnalyticsService, GoalsAnalyticsResolver],
  exports: [GoalsAnalyticsService],
})
export class GoalsAnalyticsModule {}
