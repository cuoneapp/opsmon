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
import { OperationalPerformanceWhereInput } from "./OperationalPerformanceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OperationalPerformanceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OperationalPerformanceWhereInput,
  })
  @ValidateNested()
  @Type(() => OperationalPerformanceWhereInput)
  @IsOptional()
  @Field(() => OperationalPerformanceWhereInput, {
    nullable: true,
  })
  every?: OperationalPerformanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => OperationalPerformanceWhereInput,
  })
  @ValidateNested()
  @Type(() => OperationalPerformanceWhereInput)
  @IsOptional()
  @Field(() => OperationalPerformanceWhereInput, {
    nullable: true,
  })
  some?: OperationalPerformanceWhereInput;

  @ApiProperty({
    required: false,
    type: () => OperationalPerformanceWhereInput,
  })
  @ValidateNested()
  @Type(() => OperationalPerformanceWhereInput)
  @IsOptional()
  @Field(() => OperationalPerformanceWhereInput, {
    nullable: true,
  })
  none?: OperationalPerformanceWhereInput;
}
export { OperationalPerformanceListRelationFilter as OperationalPerformanceListRelationFilter };