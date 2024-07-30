import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { QualityInspectionResolverBase } from "./base/qualityInspection.resolver.base";
import { QualityInspection } from "./base/QualityInspection";
import { QualityInspectionService } from "./qualityInspection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => QualityInspection)
export class QualityInspectionResolver extends QualityInspectionResolverBase {
  constructor(
    protected readonly service: QualityInspectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
