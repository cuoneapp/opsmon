import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MonitoringTaskModuleBase } from "./base/monitoringTask.module.base";
import { MonitoringTaskService } from "./monitoringTask.service";
import { MonitoringTaskController } from "./monitoringTask.controller";
import { MonitoringTaskResolver } from "./monitoringTask.resolver";

@Module({
  imports: [MonitoringTaskModuleBase, forwardRef(() => AuthModule)],
  controllers: [MonitoringTaskController],
  providers: [MonitoringTaskService, MonitoringTaskResolver],
  exports: [MonitoringTaskService],
})
export class MonitoringTaskModule {}
