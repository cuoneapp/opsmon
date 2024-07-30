import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MonitoringTaskService } from "./monitoringTask.service";
import { MonitoringTaskControllerBase } from "./base/monitoringTask.controller.base";

@swagger.ApiTags("monitoringTasks")
@common.Controller("monitoringTasks")
export class MonitoringTaskController extends MonitoringTaskControllerBase {
  constructor(
    protected readonly service: MonitoringTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
