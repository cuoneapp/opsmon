import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContingencyPlanResolverBase } from "./base/contingencyPlan.resolver.base";
import { ContingencyPlan } from "./base/ContingencyPlan";
import { ContingencyPlanService } from "./contingencyPlan.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContingencyPlan)
export class ContingencyPlanResolver extends ContingencyPlanResolverBase {
  constructor(
    protected readonly service: ContingencyPlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
