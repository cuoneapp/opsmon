/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Compliance } from "./Compliance";
import { ComplianceCountArgs } from "./ComplianceCountArgs";
import { ComplianceFindManyArgs } from "./ComplianceFindManyArgs";
import { ComplianceFindUniqueArgs } from "./ComplianceFindUniqueArgs";
import { DeleteComplianceArgs } from "./DeleteComplianceArgs";
import { ComplianceService } from "../compliance.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Compliance)
export class ComplianceResolverBase {
  constructor(
    protected readonly service: ComplianceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Compliance",
    action: "read",
    possession: "any",
  })
  async _compliancesMeta(
    @graphql.Args() args: ComplianceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Compliance])
  @nestAccessControl.UseRoles({
    resource: "Compliance",
    action: "read",
    possession: "any",
  })
  async compliances(
    @graphql.Args() args: ComplianceFindManyArgs
  ): Promise<Compliance[]> {
    return this.service.compliances(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Compliance, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Compliance",
    action: "read",
    possession: "own",
  })
  async compliance(
    @graphql.Args() args: ComplianceFindUniqueArgs
  ): Promise<Compliance | null> {
    const result = await this.service.compliance(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Compliance)
  @nestAccessControl.UseRoles({
    resource: "Compliance",
    action: "delete",
    possession: "any",
  })
  async deleteCompliance(
    @graphql.Args() args: DeleteComplianceArgs
  ): Promise<Compliance | null> {
    try {
      return await this.service.deleteCompliance(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
