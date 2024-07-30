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
import { GoalAssignments } from "./GoalAssignments";
import { GoalAssignmentsCountArgs } from "./GoalAssignmentsCountArgs";
import { GoalAssignmentsFindManyArgs } from "./GoalAssignmentsFindManyArgs";
import { GoalAssignmentsFindUniqueArgs } from "./GoalAssignmentsFindUniqueArgs";
import { DeleteGoalAssignmentsArgs } from "./DeleteGoalAssignmentsArgs";
import { GoalAssignmentsService } from "../goalAssignments.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GoalAssignments)
export class GoalAssignmentsResolverBase {
  constructor(
    protected readonly service: GoalAssignmentsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "GoalAssignments",
    action: "read",
    possession: "any",
  })
  async _goalAssignmentsItemsMeta(
    @graphql.Args() args: GoalAssignmentsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [GoalAssignments])
  @nestAccessControl.UseRoles({
    resource: "GoalAssignments",
    action: "read",
    possession: "any",
  })
  async goalAssignmentsItems(
    @graphql.Args() args: GoalAssignmentsFindManyArgs
  ): Promise<GoalAssignments[]> {
    return this.service.goalAssignmentsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => GoalAssignments, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "GoalAssignments",
    action: "read",
    possession: "own",
  })
  async goalAssignments(
    @graphql.Args() args: GoalAssignmentsFindUniqueArgs
  ): Promise<GoalAssignments | null> {
    const result = await this.service.goalAssignments(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => GoalAssignments)
  @nestAccessControl.UseRoles({
    resource: "GoalAssignments",
    action: "delete",
    possession: "any",
  })
  async deleteGoalAssignments(
    @graphql.Args() args: DeleteGoalAssignmentsArgs
  ): Promise<GoalAssignments | null> {
    try {
      return await this.service.deleteGoalAssignments(args);
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