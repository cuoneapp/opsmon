import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SopModuleBase } from "./base/sop.module.base";
import { SopService } from "./sop.service";
import { SopController } from "./sop.controller";
import { SopResolver } from "./sop.resolver";

@Module({
  imports: [SopModuleBase, forwardRef(() => AuthModule)],
  controllers: [SopController],
  providers: [SopService, SopResolver],
  exports: [SopService],
})
export class SopModule {}
