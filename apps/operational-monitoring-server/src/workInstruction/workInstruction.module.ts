import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkInstructionModuleBase } from "./base/workInstruction.module.base";
import { WorkInstructionService } from "./workInstruction.service";
import { WorkInstructionController } from "./workInstruction.controller";
import { WorkInstructionResolver } from "./workInstruction.resolver";

@Module({
  imports: [WorkInstructionModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkInstructionController],
  providers: [WorkInstructionService, WorkInstructionResolver],
  exports: [WorkInstructionService],
})
export class WorkInstructionModule {}
