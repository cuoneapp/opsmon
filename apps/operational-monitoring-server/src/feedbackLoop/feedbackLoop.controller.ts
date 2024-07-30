import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FeedbackLoopService } from "./feedbackLoop.service";
import { FeedbackLoopControllerBase } from "./base/feedbackLoop.controller.base";

@swagger.ApiTags("feedbackLoops")
@common.Controller("feedbackLoops")
export class FeedbackLoopController extends FeedbackLoopControllerBase {
  constructor(
    protected readonly service: FeedbackLoopService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
