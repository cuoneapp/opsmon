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
import { ContingencyPlanWhereInput } from "./ContingencyPlanWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ContingencyPlanCountArgs {
  @ApiProperty({
    required: false,
    type: () => ContingencyPlanWhereInput,
  })
  @Field(() => ContingencyPlanWhereInput, { nullable: true })
  @Type(() => ContingencyPlanWhereInput)
  where?: ContingencyPlanWhereInput;
}

export { ContingencyPlanCountArgs as ContingencyPlanCountArgs };
