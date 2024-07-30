import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QualityInspectionService } from "./qualityInspection.service";
import { QualityInspectionControllerBase } from "./base/qualityInspection.controller.base";

@swagger.ApiTags("qualityInspections")
@common.Controller("qualityInspections")
export class QualityInspectionController extends QualityInspectionControllerBase {
  constructor(
    protected readonly service: QualityInspectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
