import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FeedbackLoopResolverBase } from "./base/feedbackLoop.resolver.base";
import { FeedbackLoop } from "./base/FeedbackLoop";
import { FeedbackLoopService } from "./feedbackLoop.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FeedbackLoop)
export class FeedbackLoopResolver extends FeedbackLoopResolverBase {
  constructor(
    protected readonly service: FeedbackLoopService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
