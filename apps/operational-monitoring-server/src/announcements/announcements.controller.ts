import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnnouncementsService } from "./announcements.service";
import { AnnouncementsControllerBase } from "./base/announcements.controller.base";

@swagger.ApiTags("announcements")
@common.Controller("announcements")
export class AnnouncementsController extends AnnouncementsControllerBase {
  constructor(
    protected readonly service: AnnouncementsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
