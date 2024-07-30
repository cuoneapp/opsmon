import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContingencyPlanService } from "./contingencyPlan.service";
import { ContingencyPlanControllerBase } from "./base/contingencyPlan.controller.base";

@swagger.ApiTags("contingencyPlans")
@common.Controller("contingencyPlans")
export class ContingencyPlanController extends ContingencyPlanControllerBase {
  constructor(
    protected readonly service: ContingencyPlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
