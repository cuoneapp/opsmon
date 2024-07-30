import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KnowledgebaseServiceBase } from "./base/knowledgebase.service.base";

@Injectable()
export class KnowledgebaseService extends KnowledgebaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
