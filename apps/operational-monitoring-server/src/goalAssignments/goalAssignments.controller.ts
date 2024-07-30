import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GoalAssignmentsService } from "./goalAssignments.service";
import { GoalAssignmentsControllerBase } from "./base/goalAssignments.controller.base";

@swagger.ApiTags("goalAssignments")
@common.Controller("goalAssignments")
export class GoalAssignmentsController extends GoalAssignmentsControllerBase {
  constructor(
    protected readonly service: GoalAssignmentsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
