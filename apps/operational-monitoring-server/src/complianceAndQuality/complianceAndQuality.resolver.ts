import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ComplianceAndQualityResolverBase } from "./base/complianceAndQuality.resolver.base";
import { ComplianceAndQuality } from "./base/ComplianceAndQuality";
import { ComplianceAndQualityService } from "./complianceAndQuality.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ComplianceAndQuality)
export class ComplianceAndQualityResolver extends ComplianceAndQualityResolverBase {
  constructor(
    protected readonly service: ComplianceAndQualityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
