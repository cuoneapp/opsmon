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
import { TrainingWhereInput } from "./TrainingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TrainingOrderByInput } from "./TrainingOrderByInput";

@ArgsType()
class TrainingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TrainingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TrainingWhereInput, { nullable: true })
  @Type(() => TrainingWhereInput)
  where?: TrainingWhereInput;

  @ApiProperty({
    required: false,
    type: [TrainingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TrainingOrderByInput], { nullable: true })
  @Type(() => TrainingOrderByInput)
  orderBy?: Array<TrainingOrderByInput>;

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

export { TrainingFindManyArgs as TrainingFindManyArgs };