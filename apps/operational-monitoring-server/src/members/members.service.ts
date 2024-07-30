import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MembersServiceBase } from "./base/members.service.base";

@Injectable()
export class MembersService extends MembersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
