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
import { MembersWhereInput } from "./MembersWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class MembersCountArgs {
  @ApiProperty({
    required: false,
    type: () => MembersWhereInput,
  })
  @Field(() => MembersWhereInput, { nullable: true })
  @Type(() => MembersWhereInput)
  where?: MembersWhereInput;
}

export { MembersCountArgs as MembersCountArgs };