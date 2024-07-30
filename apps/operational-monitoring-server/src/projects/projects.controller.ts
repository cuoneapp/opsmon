import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProjectsService } from "./projects.service";
import { ProjectsControllerBase } from "./base/projects.controller.base";

@swagger.ApiTags("projects")
@common.Controller("projects")
export class ProjectsController extends ProjectsControllerBase {
  constructor(
    protected readonly service: ProjectsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
