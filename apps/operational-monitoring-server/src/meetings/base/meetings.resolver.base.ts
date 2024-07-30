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
import { Meetings } from "./Meetings";
import { MeetingsCountArgs } from "./MeetingsCountArgs";
import { MeetingsFindManyArgs } from "./MeetingsFindManyArgs";
import { MeetingsFindUniqueArgs } from "./MeetingsFindUniqueArgs";
import { DeleteMeetingsArgs } from "./DeleteMeetingsArgs";
import { MeetingsService } from "../meetings.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Meetings)
export class MeetingsResolverBase {
  constructor(
    protected readonly service: MeetingsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Meetings",
    action: "read",
    possession: "any",
  })
  async _meetingsItemsMeta(
    @graphql.Args() args: MeetingsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Meetings])
  @nestAccessControl.UseRoles({
    resource: "Meetings",
    action: "read",
    possession: "any",
  })
  async meetingsItems(
    @graphql.Args() args: MeetingsFindManyArgs
  ): Promise<Meetings[]> {
    return this.service.meetingsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Meetings, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Meetings",
    action: "read",
    possession: "own",
  })
  async meetings(
    @graphql.Args() args: MeetingsFindUniqueArgs
  ): Promise<Meetings | null> {
    const result = await this.service.meetings(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Meetings)
  @nestAccessControl.UseRoles({
    resource: "Meetings",
    action: "delete",
    possession: "any",
  })
  async deleteMeetings(
    @graphql.Args() args: DeleteMeetingsArgs
  ): Promise<Meetings | null> {
    try {
      return await this.service.deleteMeetings(args);
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
