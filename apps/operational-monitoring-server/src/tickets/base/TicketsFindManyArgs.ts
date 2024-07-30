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
import { TicketsWhereInput } from "./TicketsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TicketsOrderByInput } from "./TicketsOrderByInput";

@ArgsType()
class TicketsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TicketsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TicketsWhereInput, { nullable: true })
  @Type(() => TicketsWhereInput)
  where?: TicketsWhereInput;

  @ApiProperty({
    required: false,
    type: [TicketsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TicketsOrderByInput], { nullable: true })
  @Type(() => TicketsOrderByInput)
  orderBy?: Array<TicketsOrderByInput>;

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

export { TicketsFindManyArgs as TicketsFindManyArgs };
