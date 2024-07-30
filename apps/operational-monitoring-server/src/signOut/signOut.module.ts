import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SignOutModuleBase } from "./base/signOut.module.base";
import { SignOutService } from "./signOut.service";
import { SignOutController } from "./signOut.controller";
import { SignOutResolver } from "./signOut.resolver";

@Module({
  imports: [SignOutModuleBase, forwardRef(() => AuthModule)],
  controllers: [SignOutController],
  providers: [SignOutService, SignOutResolver],
  exports: [SignOutService],
})
export class SignOutModule {}
