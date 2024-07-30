import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PeriodicTaskModuleBase } from "./base/periodicTask.module.base";
import { PeriodicTaskService } from "./periodicTask.service";
import { PeriodicTaskController } from "./periodicTask.controller";
import { PeriodicTaskResolver } from "./periodicTask.resolver";

@Module({
  imports: [PeriodicTaskModuleBase, forwardRef(() => AuthModule)],
  controllers: [PeriodicTaskController],
  providers: [PeriodicTaskService, PeriodicTaskResolver],
  exports: [PeriodicTaskService],
})
export class PeriodicTaskModule {}
