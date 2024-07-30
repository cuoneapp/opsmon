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
import { PeriodicTask } from "./PeriodicTask";
import { PeriodicTaskCountArgs } from "./PeriodicTaskCountArgs";
import { PeriodicTaskFindManyArgs } from "./PeriodicTaskFindManyArgs";
import { PeriodicTaskFindUniqueArgs } from "./PeriodicTaskFindUniqueArgs";
import { DeletePeriodicTaskArgs } from "./DeletePeriodicTaskArgs";
import { PeriodicTaskService } from "../periodicTask.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PeriodicTask)
export class PeriodicTaskResolverBase {
  constructor(
    protected readonly service: PeriodicTaskService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PeriodicTask",
    action: "read",
    possession: "any",
  })
  async _periodicTasksMeta(
    @graphql.Args() args: PeriodicTaskCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PeriodicTask])
  @nestAccessControl.UseRoles({
    resource: "PeriodicTask",
    action: "read",
    possession: "any",
  })
  async periodicTasks(
    @graphql.Args() args: PeriodicTaskFindManyArgs
  ): Promise<PeriodicTask[]> {
    return this.service.periodicTasks(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PeriodicTask, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PeriodicTask",
    action: "read",
    possession: "own",
  })
  async periodicTask(
    @graphql.Args() args: PeriodicTaskFindUniqueArgs
  ): Promise<PeriodicTask | null> {
    const result = await this.service.periodicTask(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PeriodicTask)
  @nestAccessControl.UseRoles({
    resource: "PeriodicTask",
    action: "delete",
    possession: "any",
  })
  async deletePeriodicTask(
    @graphql.Args() args: DeletePeriodicTaskArgs
  ): Promise<PeriodicTask | null> {
    try {
      return await this.service.deletePeriodicTask(args);
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