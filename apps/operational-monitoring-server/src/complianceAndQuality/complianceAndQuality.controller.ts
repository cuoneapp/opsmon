import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComplianceAndQualityService } from "./complianceAndQuality.service";
import { ComplianceAndQualityControllerBase } from "./base/complianceAndQuality.controller.base";

@swagger.ApiTags("complianceAndQualities")
@common.Controller("complianceAndQualities")
export class ComplianceAndQualityController extends ComplianceAndQualityControllerBase {
  constructor(
    protected readonly service: ComplianceAndQualityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
