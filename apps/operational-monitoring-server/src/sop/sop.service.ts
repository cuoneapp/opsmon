import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SopServiceBase } from "./base/sop.service.base";

@Injectable()
export class SopService extends SopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
