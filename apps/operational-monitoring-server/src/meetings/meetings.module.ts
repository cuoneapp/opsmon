import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MeetingsModuleBase } from "./base/meetings.module.base";
import { MeetingsService } from "./meetings.service";
import { MeetingsController } from "./meetings.controller";
import { MeetingsResolver } from "./meetings.resolver";

@Module({
  imports: [MeetingsModuleBase, forwardRef(() => AuthModule)],
  controllers: [MeetingsController],
  providers: [MeetingsService, MeetingsResolver],
  exports: [MeetingsService],
})
export class MeetingsModule {}
