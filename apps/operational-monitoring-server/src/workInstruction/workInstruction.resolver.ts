import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkInstructionResolverBase } from "./base/workInstruction.resolver.base";
import { WorkInstruction } from "./base/WorkInstruction";
import { WorkInstructionService } from "./workInstruction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkInstruction)
export class WorkInstructionResolver extends WorkInstructionResolverBase {
  constructor(
    protected readonly service: WorkInstructionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
