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
import { Forms } from "./Forms";
import { FormsCountArgs } from "./FormsCountArgs";
import { FormsFindManyArgs } from "./FormsFindManyArgs";
import { FormsFindUniqueArgs } from "./FormsFindUniqueArgs";
import { DeleteFormsArgs } from "./DeleteFormsArgs";
import { FormsService } from "../forms.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Forms)
export class FormsResolverBase {
  constructor(
    protected readonly service: FormsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Forms",
    action: "read",
    possession: "any",
  })
  async _formsItemsMeta(
    @graphql.Args() args: FormsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Forms])
  @nestAccessControl.UseRoles({
    resource: "Forms",
    action: "read",
    possession: "any",
  })
  async formsItems(@graphql.Args() args: FormsFindManyArgs): Promise<Forms[]> {
    return this.service.formsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Forms, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Forms",
    action: "read",
    possession: "own",
  })
  async forms(
    @graphql.Args() args: FormsFindUniqueArgs
  ): Promise<Forms | null> {
    const result = await this.service.forms(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Forms)
  @nestAccessControl.UseRoles({
    resource: "Forms",
    action: "delete",
    possession: "any",
  })
  async deleteForms(
    @graphql.Args() args: DeleteFormsArgs
  ): Promise<Forms | null> {
    try {
      return await this.service.deleteForms(args);
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