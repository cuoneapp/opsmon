import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { KnowledgebaseResolverBase } from "./base/knowledgebase.resolver.base";
import { Knowledgebase } from "./base/Knowledgebase";
import { KnowledgebaseService } from "./knowledgebase.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Knowledgebase)
export class KnowledgebaseResolver extends KnowledgebaseResolverBase {
  constructor(
    protected readonly service: KnowledgebaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
