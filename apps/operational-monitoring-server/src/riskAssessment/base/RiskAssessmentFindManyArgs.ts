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
import { RiskAssessmentWhereInput } from "./RiskAssessmentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RiskAssessmentOrderByInput } from "./RiskAssessmentOrderByInput";

@ArgsType()
class RiskAssessmentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RiskAssessmentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RiskAssessmentWhereInput, { nullable: true })
  @Type(() => RiskAssessmentWhereInput)
  where?: RiskAssessmentWhereInput;

  @ApiProperty({
    required: false,
    type: [RiskAssessmentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RiskAssessmentOrderByInput], { nullable: true })
  @Type(() => RiskAssessmentOrderByInput)
  orderBy?: Array<RiskAssessmentOrderByInput>;

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

export { RiskAssessmentFindManyArgs as RiskAssessmentFindManyArgs };
