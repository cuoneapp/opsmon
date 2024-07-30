import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GoalsAnalyticsService } from "./goalsAnalytics.service";
import { GoalsAnalyticsControllerBase } from "./base/goalsAnalytics.controller.base";

@swagger.ApiTags("goalsAnalytics")
@common.Controller("goalsAnalytics")
export class GoalsAnalyticsController extends GoalsAnalyticsControllerBase {
  constructor(
    protected readonly service: GoalsAnalyticsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
