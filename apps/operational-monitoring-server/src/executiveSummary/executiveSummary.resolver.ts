import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExecutiveSummaryResolverBase } from "./base/executiveSummary.resolver.base";
import { ExecutiveSummary } from "./base/ExecutiveSummary";
import { ExecutiveSummaryService } from "./executiveSummary.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExecutiveSummary)
export class ExecutiveSummaryResolver extends ExecutiveSummaryResolverBase {
  constructor(
    protected readonly service: ExecutiveSummaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
