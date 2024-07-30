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
import { QualityInspectionWhereInput } from "./QualityInspectionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { QualityInspectionOrderByInput } from "./QualityInspectionOrderByInput";

@ArgsType()
class QualityInspectionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => QualityInspectionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => QualityInspectionWhereInput, { nullable: true })
  @Type(() => QualityInspectionWhereInput)
  where?: QualityInspectionWhereInput;

  @ApiProperty({
    required: false,
    type: [QualityInspectionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [QualityInspectionOrderByInput], { nullable: true })
  @Type(() => QualityInspectionOrderByInput)
  orderBy?: Array<QualityInspectionOrderByInput>;

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

export { QualityInspectionFindManyArgs as QualityInspectionFindManyArgs };
