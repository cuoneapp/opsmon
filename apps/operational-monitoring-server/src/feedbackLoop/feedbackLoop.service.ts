import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeedbackLoopServiceBase } from "./base/feedbackLoop.service.base";

@Injectable()
export class FeedbackLoopService extends FeedbackLoopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
