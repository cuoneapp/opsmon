import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExecutiveSummaryModuleBase } from "./base/executiveSummary.module.base";
import { ExecutiveSummaryService } from "./executiveSummary.service";
import { ExecutiveSummaryController } from "./executiveSummary.controller";
import { ExecutiveSummaryResolver } from "./executiveSummary.resolver";

@Module({
  imports: [ExecutiveSummaryModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExecutiveSummaryController],
  providers: [ExecutiveSummaryService, ExecutiveSummaryResolver],
  exports: [ExecutiveSummaryService],
})
export class ExecutiveSummaryModule {}
