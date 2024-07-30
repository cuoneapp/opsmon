import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PolicyService } from "./policy.service";
import { PolicyControllerBase } from "./base/policy.controller.base";

@swagger.ApiTags("policies")
@common.Controller("policies")
export class PolicyController extends PolicyControllerBase {
  constructor(
    protected readonly service: PolicyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
