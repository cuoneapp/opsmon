import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GoalAssignmentsModuleBase } from "./base/goalAssignments.module.base";
import { GoalAssignmentsService } from "./goalAssignments.service";
import { GoalAssignmentsController } from "./goalAssignments.controller";
import { GoalAssignmentsResolver } from "./goalAssignments.resolver";

@Module({
  imports: [GoalAssignmentsModuleBase, forwardRef(() => AuthModule)],
  controllers: [GoalAssignmentsController],
  providers: [GoalAssignmentsService, GoalAssignmentsResolver],
  exports: [GoalAssignmentsService],
})
export class GoalAssignmentsModule {}
