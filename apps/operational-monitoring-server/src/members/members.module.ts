import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MembersModuleBase } from "./base/members.module.base";
import { MembersService } from "./members.service";
import { MembersController } from "./members.controller";
import { MembersResolver } from "./members.resolver";

@Module({
  imports: [MembersModuleBase, forwardRef(() => AuthModule)],
  controllers: [MembersController],
  providers: [MembersService, MembersResolver],
  exports: [MembersService],
})
export class MembersModule {}
