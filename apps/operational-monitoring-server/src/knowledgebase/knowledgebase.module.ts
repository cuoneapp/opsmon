import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { KnowledgebaseModuleBase } from "./base/knowledgebase.module.base";
import { KnowledgebaseService } from "./knowledgebase.service";
import { KnowledgebaseController } from "./knowledgebase.controller";
import { KnowledgebaseResolver } from "./knowledgebase.resolver";

@Module({
  imports: [KnowledgebaseModuleBase, forwardRef(() => AuthModule)],
  controllers: [KnowledgebaseController],
  providers: [KnowledgebaseService, KnowledgebaseResolver],
  exports: [KnowledgebaseService],
})
export class KnowledgebaseModule {}
