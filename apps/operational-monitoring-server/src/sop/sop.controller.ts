import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SopService } from "./sop.service";
import { SopControllerBase } from "./base/sop.controller.base";

@swagger.ApiTags("sops")
@common.Controller("sops")
export class SopController extends SopControllerBase {
  constructor(
    protected readonly service: SopService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
