import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnnouncementsModuleBase } from "./base/announcements.module.base";
import { AnnouncementsService } from "./announcements.service";
import { AnnouncementsController } from "./announcements.controller";
import { AnnouncementsResolver } from "./announcements.resolver";

@Module({
  imports: [AnnouncementsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnnouncementsController],
  providers: [AnnouncementsService, AnnouncementsResolver],
  exports: [AnnouncementsService],
})
export class AnnouncementsModule {}
