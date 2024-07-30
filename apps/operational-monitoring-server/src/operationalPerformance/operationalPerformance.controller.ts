import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OperationalPerformanceService } from "./operationalPerformance.service";
import { OperationalPerformanceControllerBase } from "./base/operationalPerformance.controller.base";

@swagger.ApiTags("operationalPerformances")
@common.Controller("operationalPerformances")
export class OperationalPerformanceController extends OperationalPerformanceControllerBase {
  constructor(
    protected readonly service: OperationalPerformanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
