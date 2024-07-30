import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FormsModuleBase } from "./base/forms.module.base";
import { FormsService } from "./forms.service";
import { FormsController } from "./forms.controller";
import { FormsResolver } from "./forms.resolver";

@Module({
  imports: [FormsModuleBase, forwardRef(() => AuthModule)],
  controllers: [FormsController],
  providers: [FormsService, FormsResolver],
  exports: [FormsService],
})
export class FormsModule {}
