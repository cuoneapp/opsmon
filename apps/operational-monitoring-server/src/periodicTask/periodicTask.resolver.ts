import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PeriodicTaskResolverBase } from "./base/periodicTask.resolver.base";
import { PeriodicTask } from "./base/PeriodicTask";
import { PeriodicTaskService } from "./periodicTask.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PeriodicTask)
export class PeriodicTaskResolver extends PeriodicTaskResolverBase {
  constructor(
    protected readonly service: PeriodicTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
