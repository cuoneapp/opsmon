import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CollaborationModuleBase } from "./base/collaboration.module.base";
import { CollaborationService } from "./collaboration.service";
import { CollaborationController } from "./collaboration.controller";
import { CollaborationResolver } from "./collaboration.resolver";

@Module({
  imports: [CollaborationModuleBase, forwardRef(() => AuthModule)],
  controllers: [CollaborationController],
  providers: [CollaborationService, CollaborationResolver],
  exports: [CollaborationService],
})
export class CollaborationModule {}
