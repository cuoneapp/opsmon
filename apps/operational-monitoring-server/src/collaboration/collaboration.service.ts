import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CollaborationServiceBase } from "./base/collaboration.service.base";

@Injectable()
export class CollaborationService extends CollaborationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
