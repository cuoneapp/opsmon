import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PeriodicTaskService } from "./periodicTask.service";
import { PeriodicTaskControllerBase } from "./base/periodicTask.controller.base";

@swagger.ApiTags("periodicTasks")
@common.Controller("periodicTasks")
export class PeriodicTaskController extends PeriodicTaskControllerBase {
  constructor(
    protected readonly service: PeriodicTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
