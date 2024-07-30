import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TaskAssignmentResolverBase } from "./base/taskAssignment.resolver.base";
import { TaskAssignment } from "./base/TaskAssignment";
import { TaskAssignmentService } from "./taskAssignment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TaskAssignment)
export class TaskAssignmentResolver extends TaskAssignmentResolverBase {
  constructor(
    protected readonly service: TaskAssignmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
