/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GoalAssignmentsWhereInput } from "./GoalAssignmentsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GoalAssignmentsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GoalAssignmentsWhereInput,
  })
  @ValidateNested()
  @Type(() => GoalAssignmentsWhereInput)
  @IsOptional()
  @Field(() => GoalAssignmentsWhereInput, {
    nullable: true,
  })
  every?: GoalAssignmentsWhereInput;

  @ApiProperty({
    required: false,
    type: () => GoalAssignmentsWhereInput,
  })
  @ValidateNested()
  @Type(() => GoalAssignmentsWhereInput)
  @IsOptional()
  @Field(() => GoalAssignmentsWhereInput, {
    nullable: true,
  })
  some?: GoalAssignmentsWhereInput;

  @ApiProperty({
    required: false,
    type: () => GoalAssignmentsWhereInput,
  })
  @ValidateNested()
  @Type(() => GoalAssignmentsWhereInput)
  @IsOptional()
  @Field(() => GoalAssignmentsWhereInput, {
    nullable: true,
  })
  none?: GoalAssignmentsWhereInput;
}
export { GoalAssignmentsListRelationFilter as GoalAssignmentsListRelationFilter };