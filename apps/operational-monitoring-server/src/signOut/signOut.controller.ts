import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SignOutService } from "./signOut.service";
import { SignOutControllerBase } from "./base/signOut.controller.base";

@swagger.ApiTags("signOuts")
@common.Controller("signOuts")
export class SignOutController extends SignOutControllerBase {
  constructor(
    protected readonly service: SignOutService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
