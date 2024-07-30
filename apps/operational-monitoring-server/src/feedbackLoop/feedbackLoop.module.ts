import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FeedbackLoopModuleBase } from "./base/feedbackLoop.module.base";
import { FeedbackLoopService } from "./feedbackLoop.service";
import { FeedbackLoopController } from "./feedbackLoop.controller";
import { FeedbackLoopResolver } from "./feedbackLoop.resolver";

@Module({
  imports: [FeedbackLoopModuleBase, forwardRef(() => AuthModule)],
  controllers: [FeedbackLoopController],
  providers: [FeedbackLoopService, FeedbackLoopResolver],
  exports: [FeedbackLoopService],
})
export class FeedbackLoopModule {}
