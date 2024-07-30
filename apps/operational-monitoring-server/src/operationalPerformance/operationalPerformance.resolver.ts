import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OperationalPerformanceResolverBase } from "./base/operationalPerformance.resolver.base";
import { OperationalPerformance } from "./base/OperationalPerformance";
import { OperationalPerformanceService } from "./operationalPerformance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OperationalPerformance)
export class OperationalPerformanceResolver extends OperationalPerformanceResolverBase {
  constructor(
    protected readonly service: OperationalPerformanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
