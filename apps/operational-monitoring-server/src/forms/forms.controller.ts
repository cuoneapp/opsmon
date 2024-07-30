import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FormsService } from "./forms.service";
import { FormsControllerBase } from "./base/forms.controller.base";

@swagger.ApiTags("forms")
@common.Controller("forms")
export class FormsController extends FormsControllerBase {
  constructor(
    protected readonly service: FormsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
