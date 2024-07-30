import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkInstructionService } from "./workInstruction.service";
import { WorkInstructionControllerBase } from "./base/workInstruction.controller.base";

@swagger.ApiTags("workInstructions")
@common.Controller("workInstructions")
export class WorkInstructionController extends WorkInstructionControllerBase {
  constructor(
    protected readonly service: WorkInstructionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
