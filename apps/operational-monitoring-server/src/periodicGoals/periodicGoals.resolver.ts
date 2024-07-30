import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PeriodicGoalsResolverBase } from "./base/periodicGoals.resolver.base";
import { PeriodicGoals } from "./base/PeriodicGoals";
import { PeriodicGoalsService } from "./periodicGoals.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PeriodicGoals)
export class PeriodicGoalsResolver extends PeriodicGoalsResolverBase {
  constructor(
    protected readonly service: PeriodicGoalsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
