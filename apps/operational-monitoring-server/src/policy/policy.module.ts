import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PolicyModuleBase } from "./base/policy.module.base";
import { PolicyService } from "./policy.service";
import { PolicyController } from "./policy.controller";
import { PolicyResolver } from "./policy.resolver";

@Module({
  imports: [PolicyModuleBase, forwardRef(() => AuthModule)],
  controllers: [PolicyController],
  providers: [PolicyService, PolicyResolver],
  exports: [PolicyService],
})
export class PolicyModule {}
