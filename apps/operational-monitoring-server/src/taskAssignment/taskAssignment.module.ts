import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TaskAssignmentModuleBase } from "./base/taskAssignment.module.base";
import { TaskAssignmentService } from "./taskAssignment.service";
import { TaskAssignmentController } from "./taskAssignment.controller";
import { TaskAssignmentResolver } from "./taskAssignment.resolver";

@Module({
  imports: [TaskAssignmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [TaskAssignmentController],
  providers: [TaskAssignmentService, TaskAssignmentResolver],
  exports: [TaskAssignmentService],
})
export class TaskAssignmentModule {}
