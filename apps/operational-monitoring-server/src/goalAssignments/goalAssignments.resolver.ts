import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GoalAssignmentsResolverBase } from "./base/goalAssignments.resolver.base";
import { GoalAssignments } from "./base/GoalAssignments";
import { GoalAssignmentsService } from "./goalAssignments.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GoalAssignments)
export class GoalAssignmentsResolver extends GoalAssignmentsResolverBase {
  constructor(
    protected readonly service: GoalAssignmentsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
