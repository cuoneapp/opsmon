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
import { SignOutWhereInput } from "./SignOutWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SignOutCountArgs {
  @ApiProperty({
    required: false,
    type: () => SignOutWhereInput,
  })
  @Field(() => SignOutWhereInput, { nullable: true })
  @Type(() => SignOutWhereInput)
  where?: SignOutWhereInput;
}

export { SignOutCountArgs as SignOutCountArgs };