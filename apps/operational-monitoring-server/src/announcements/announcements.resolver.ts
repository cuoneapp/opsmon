import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnnouncementsResolverBase } from "./base/announcements.resolver.base";
import { Announcements } from "./base/Announcements";
import { AnnouncementsService } from "./announcements.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Announcements)
export class AnnouncementsResolver extends AnnouncementsResolverBase {
  constructor(
    protected readonly service: AnnouncementsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
