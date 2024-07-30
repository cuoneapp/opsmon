import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MonitoringTaskResolverBase } from "./base/monitoringTask.resolver.base";
import { MonitoringTask } from "./base/MonitoringTask";
import { MonitoringTaskService } from "./monitoringTask.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MonitoringTask)
export class MonitoringTaskResolver extends MonitoringTaskResolverBase {
  constructor(
    protected readonly service: MonitoringTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
