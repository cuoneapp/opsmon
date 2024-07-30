import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PeriodicGoalsService } from "./periodicGoals.service";
import { PeriodicGoalsControllerBase } from "./base/periodicGoals.controller.base";

@swagger.ApiTags("periodicGoals")
@common.Controller("periodicGoals")
export class PeriodicGoalsController extends PeriodicGoalsControllerBase {
  constructor(
    protected readonly service: PeriodicGoalsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
