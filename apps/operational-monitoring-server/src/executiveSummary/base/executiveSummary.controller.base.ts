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
import { ExecutiveSummaryService } from "../executiveSummary.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ExecutiveSummaryCreateInput } from "./ExecutiveSummaryCreateInput";
import { ExecutiveSummary } from "./ExecutiveSummary";
import { ExecutiveSummaryFindManyArgs } from "./ExecutiveSummaryFindManyArgs";
import { ExecutiveSummaryWhereUniqueInput } from "./ExecutiveSummaryWhereUniqueInput";
import { ExecutiveSummaryUpdateInput } from "./ExecutiveSummaryUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ExecutiveSummaryControllerBase {
  constructor(
    protected readonly service: ExecutiveSummaryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ExecutiveSummary })
  @nestAccessControl.UseRoles({
    resource: "ExecutiveSummary",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createExecutiveSummary(
    @common.Body() data: ExecutiveSummaryCreateInput
  ): Promise<ExecutiveSummary> {
    return await this.service.createExecutiveSummary({
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
  @swagger.ApiOkResponse({ type: [ExecutiveSummary] })
  @ApiNestedQuery(ExecutiveSummaryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ExecutiveSummary",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async executiveSummaries(
    @common.Req() request: Request
  ): Promise<ExecutiveSummary[]> {
    const args = plainToClass(ExecutiveSummaryFindManyArgs, request.query);
    return this.service.executiveSummaries({
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
  @swagger.ApiOkResponse({ type: ExecutiveSummary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ExecutiveSummary",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async executiveSummary(
    @common.Param() params: ExecutiveSummaryWhereUniqueInput
  ): Promise<ExecutiveSummary | null> {
    const result = await this.service.executiveSummary({
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
  @swagger.ApiOkResponse({ type: ExecutiveSummary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ExecutiveSummary",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateExecutiveSummary(
    @common.Param() params: ExecutiveSummaryWhereUniqueInput,
    @common.Body() data: ExecutiveSummaryUpdateInput
  ): Promise<ExecutiveSummary | null> {
    try {
      return await this.service.updateExecutiveSummary({
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
  @swagger.ApiOkResponse({ type: ExecutiveSummary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ExecutiveSummary",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteExecutiveSummary(
    @common.Param() params: ExecutiveSummaryWhereUniqueInput
  ): Promise<ExecutiveSummary | null> {
    try {
      return await this.service.deleteExecutiveSummary({
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
