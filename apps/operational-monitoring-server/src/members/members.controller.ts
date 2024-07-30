import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MembersService } from "./members.service";
import { MembersControllerBase } from "./base/members.controller.base";

@swagger.ApiTags("members")
@common.Controller("members")
export class MembersController extends MembersControllerBase {
  constructor(
    protected readonly service: MembersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
