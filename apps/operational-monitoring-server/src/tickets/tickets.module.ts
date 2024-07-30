import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TicketsModuleBase } from "./base/tickets.module.base";
import { TicketsService } from "./tickets.service";
import { TicketsController } from "./tickets.controller";
import { TicketsResolver } from "./tickets.resolver";

@Module({
  imports: [TicketsModuleBase, forwardRef(() => AuthModule)],
  controllers: [TicketsController],
  providers: [TicketsService, TicketsResolver],
  exports: [TicketsService],
})
export class TicketsModule {}
