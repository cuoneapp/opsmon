import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KnowledgebaseService } from "./knowledgebase.service";
import { KnowledgebaseControllerBase } from "./base/knowledgebase.controller.base";

@swagger.ApiTags("knowledgebases")
@common.Controller("knowledgebases")
export class KnowledgebaseController extends KnowledgebaseControllerBase {
  constructor(
    protected readonly service: KnowledgebaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
