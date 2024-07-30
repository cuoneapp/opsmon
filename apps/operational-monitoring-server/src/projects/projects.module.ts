import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProjectsModuleBase } from "./base/projects.module.base";
import { ProjectsService } from "./projects.service";
import { ProjectsController } from "./projects.controller";
import { ProjectsResolver } from "./projects.resolver";

@Module({
  imports: [ProjectsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectsResolver],
  exports: [ProjectsService],
})
export class ProjectsModule {}
