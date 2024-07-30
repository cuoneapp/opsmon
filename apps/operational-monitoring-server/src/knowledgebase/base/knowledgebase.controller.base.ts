/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { KnowledgebaseService } from "../knowledgebase.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { KnowledgebaseCreateInput } from "./KnowledgebaseCreateInput";
import { Knowledgebase } from "./Knowledgebase";
import { KnowledgebaseFindManyArgs } from "./KnowledgebaseFindManyArgs";
import { KnowledgebaseWhereUniqueInput } from "./KnowledgebaseWhereUniqueInput";
import { KnowledgebaseUpdateInput } from "./KnowledgebaseUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class KnowledgebaseControllerBase {
  constructor(
    protected readonly service: KnowledgebaseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Knowledgebase })
  @nestAccessControl.UseRoles({
    resource: "Knowledgebase",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createKnowledgebase(
    @common.Body() data: KnowledgebaseCreateInput
  ): Promise<Knowledgebase> {
    return await this.service.createKnowledgebase({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Knowledgebase] })
  @ApiNestedQuery(KnowledgebaseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Knowledgebase",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async knowledgebases(
    @common.Req() request: Request
  ): Promise<Knowledgebase[]> {
    const args = plainToClass(KnowledgebaseFindManyArgs, request.query);
    return this.service.knowledgebases({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Knowledgebase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Knowledgebase",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async knowledgebase(
    @common.Param() params: KnowledgebaseWhereUniqueInput
  ): Promise<Knowledgebase | null> {
    const result = await this.service.knowledgebase({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Knowledgebase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Knowledgebase",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateKnowledgebase(
    @common.Param() params: KnowledgebaseWhereUniqueInput,
    @common.Body() data: KnowledgebaseUpdateInput
  ): Promise<Knowledgebase | null> {
    try {
      return await this.service.updateKnowledgebase({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Knowledgebase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Knowledgebase",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteKnowledgebase(
    @common.Param() params: KnowledgebaseWhereUniqueInput
  ): Promise<Knowledgebase | null> {
    try {
      return await this.service.deleteKnowledgebase({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}