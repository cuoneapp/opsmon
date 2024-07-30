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
import { ContingencyPlanService } from "../contingencyPlan.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ContingencyPlanCreateInput } from "./ContingencyPlanCreateInput";
import { ContingencyPlan } from "./ContingencyPlan";
import { ContingencyPlanFindManyArgs } from "./ContingencyPlanFindManyArgs";
import { ContingencyPlanWhereUniqueInput } from "./ContingencyPlanWhereUniqueInput";
import { ContingencyPlanUpdateInput } from "./ContingencyPlanUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ContingencyPlanControllerBase {
  constructor(
    protected readonly service: ContingencyPlanService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ContingencyPlan })
  @nestAccessControl.UseRoles({
    resource: "ContingencyPlan",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createContingencyPlan(
    @common.Body() data: ContingencyPlanCreateInput
  ): Promise<ContingencyPlan> {
    return await this.service.createContingencyPlan({
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
  @swagger.ApiOkResponse({ type: [ContingencyPlan] })
  @ApiNestedQuery(ContingencyPlanFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ContingencyPlan",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contingencyPlans(
    @common.Req() request: Request
  ): Promise<ContingencyPlan[]> {
    const args = plainToClass(ContingencyPlanFindManyArgs, request.query);
    return this.service.contingencyPlans({
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
  @swagger.ApiOkResponse({ type: ContingencyPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ContingencyPlan",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contingencyPlan(
    @common.Param() params: ContingencyPlanWhereUniqueInput
  ): Promise<ContingencyPlan | null> {
    const result = await this.service.contingencyPlan({
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
  @swagger.ApiOkResponse({ type: ContingencyPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ContingencyPlan",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateContingencyPlan(
    @common.Param() params: ContingencyPlanWhereUniqueInput,
    @common.Body() data: ContingencyPlanUpdateInput
  ): Promise<ContingencyPlan | null> {
    try {
      return await this.service.updateContingencyPlan({
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
  @swagger.ApiOkResponse({ type: ContingencyPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ContingencyPlan",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteContingencyPlan(
    @common.Param() params: ContingencyPlanWhereUniqueInput
  ): Promise<ContingencyPlan | null> {
    try {
      return await this.service.deleteContingencyPlan({
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
