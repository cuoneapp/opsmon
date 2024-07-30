import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComplianceService } from "./compliance.service";
import { ComplianceControllerBase } from "./base/compliance.controller.base";

@swagger.ApiTags("compliances")
@common.Controller("compliances")
export class ComplianceController extends ComplianceControllerBase {
  constructor(
    protected readonly service: ComplianceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
