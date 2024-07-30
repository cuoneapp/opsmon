import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TaskAssignmentService } from "./taskAssignment.service";
import { TaskAssignmentControllerBase } from "./base/taskAssignment.controller.base";

@swagger.ApiTags("taskAssignments")
@common.Controller("taskAssignments")
export class TaskAssignmentController extends TaskAssignmentControllerBase {
  constructor(
    protected readonly service: TaskAssignmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
