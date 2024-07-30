import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CollaborationService } from "./collaboration.service";
import { CollaborationControllerBase } from "./base/collaboration.controller.base";

@swagger.ApiTags("collaborations")
@common.Controller("collaborations")
export class CollaborationController extends CollaborationControllerBase {
  constructor(
    protected readonly service: CollaborationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
