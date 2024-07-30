import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExecutiveSummaryService } from "./executiveSummary.service";
import { ExecutiveSummaryControllerBase } from "./base/executiveSummary.controller.base";

@swagger.ApiTags("executiveSummaries")
@common.Controller("executiveSummaries")
export class ExecutiveSummaryController extends ExecutiveSummaryControllerBase {
  constructor(
    protected readonly service: ExecutiveSummaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
