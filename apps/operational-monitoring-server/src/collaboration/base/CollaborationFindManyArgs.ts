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
import { CollaborationWhereInput } from "./CollaborationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CollaborationOrderByInput } from "./CollaborationOrderByInput";

@ArgsType()
class CollaborationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CollaborationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CollaborationWhereInput, { nullable: true })
  @Type(() => CollaborationWhereInput)
  where?: CollaborationWhereInput;

  @ApiProperty({
    required: false,
    type: [CollaborationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CollaborationOrderByInput], { nullable: true })
  @Type(() => CollaborationOrderByInput)
  orderBy?: Array<CollaborationOrderByInput>;

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

export { CollaborationFindManyArgs as CollaborationFindManyArgs };
