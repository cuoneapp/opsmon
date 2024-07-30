import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QualityInspectionModuleBase } from "./base/qualityInspection.module.base";
import { QualityInspectionService } from "./qualityInspection.service";
import { QualityInspectionController } from "./qualityInspection.controller";
import { QualityInspectionResolver } from "./qualityInspection.resolver";

@Module({
  imports: [QualityInspectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [QualityInspectionController],
  providers: [QualityInspectionService, QualityInspectionResolver],
  exports: [QualityInspectionService],
})
export class QualityInspectionModule {}
