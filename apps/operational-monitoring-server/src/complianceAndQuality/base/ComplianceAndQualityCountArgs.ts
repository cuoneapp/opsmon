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
import { ComplianceAndQualityWhereInput } from "./ComplianceAndQualityWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ComplianceAndQualityCountArgs {
  @ApiProperty({
    required: false,
    type: () => ComplianceAndQualityWhereInput,
  })
  @Field(() => ComplianceAndQualityWhereInput, { nullable: true })
  @Type(() => ComplianceAndQualityWhereInput)
  where?: ComplianceAndQualityWhereInput;
}

export { ComplianceAndQualityCountArgs as ComplianceAndQualityCountArgs };
