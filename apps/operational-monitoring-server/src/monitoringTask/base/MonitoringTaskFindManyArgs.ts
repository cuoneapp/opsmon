/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MonitoringTaskWhereInput } from "./MonitoringTaskWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MonitoringTaskOrderByInput } from "./MonitoringTaskOrderByInput";

@ArgsType()
class MonitoringTaskFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MonitoringTaskWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MonitoringTaskWhereInput, { nullable: true })
  @Type(() => MonitoringTaskWhereInput)
  where?: MonitoringTaskWhereInput;

  @ApiProperty({
    required: false,
    type: [MonitoringTaskOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MonitoringTaskOrderByInput], { nullable: true })
  @Type(() => MonitoringTaskOrderByInput)
  orderBy?: Array<MonitoringTaskOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MonitoringTaskFindManyArgs as MonitoringTaskFindManyArgs };
