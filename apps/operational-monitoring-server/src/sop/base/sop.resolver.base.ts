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
import { Sop } from "./Sop";
import { SopCountArgs } from "./SopCountArgs";
import { SopFindManyArgs } from "./SopFindManyArgs";
import { SopFindUniqueArgs } from "./SopFindUniqueArgs";
import { DeleteSopArgs } from "./DeleteSopArgs";
import { SopService } from "../sop.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Sop)
export class SopResolverBase {
  constructor(
    protected readonly service: SopService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Sop",
    action: "read",
    possession: "any",
  })
  async _sopsMeta(
    @graphql.Args() args: SopCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Sop])
  @nestAccessControl.UseRoles({
    resource: "Sop",
    action: "read",
    possession: "any",
  })
  async sops(@graphql.Args() args: SopFindManyArgs): Promise<Sop[]> {
    return this.service.sops(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Sop, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Sop",
    action: "read",
    possession: "own",
  })
  async sop(@graphql.Args() args: SopFindUniqueArgs): Promise<Sop | null> {
    const result = await this.service.sop(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Sop)
  @nestAccessControl.UseRoles({
    resource: "Sop",
    action: "delete",
    possession: "any",
  })
  async deleteSop(@graphql.Args() args: DeleteSopArgs): Promise<Sop | null> {
    try {
      return await this.service.deleteSop(args);
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
