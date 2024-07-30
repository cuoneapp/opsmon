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
import { Training } from "./Training";
import { TrainingCountArgs } from "./TrainingCountArgs";
import { TrainingFindManyArgs } from "./TrainingFindManyArgs";
import { TrainingFindUniqueArgs } from "./TrainingFindUniqueArgs";
import { DeleteTrainingArgs } from "./DeleteTrainingArgs";
import { TrainingService } from "../training.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Training)
export class TrainingResolverBase {
  constructor(
    protected readonly service: TrainingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Training",
    action: "read",
    possession: "any",
  })
  async _trainingsMeta(
    @graphql.Args() args: TrainingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Training])
  @nestAccessControl.UseRoles({
    resource: "Training",
    action: "read",
    possession: "any",
  })
  async trainings(
    @graphql.Args() args: TrainingFindManyArgs
  ): Promise<Training[]> {
    return this.service.trainings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Training, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Training",
    action: "read",
    possession: "own",
  })
  async training(
    @graphql.Args() args: TrainingFindUniqueArgs
  ): Promise<Training | null> {
    const result = await this.service.training(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Training)
  @nestAccessControl.UseRoles({
    resource: "Training",
    action: "delete",
    possession: "any",
  })
  async deleteTraining(
    @graphql.Args() args: DeleteTrainingArgs
  ): Promise<Training | null> {
    try {
      return await this.service.deleteTraining(args);
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