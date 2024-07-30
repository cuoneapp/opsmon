import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SignOutServiceBase } from "./base/signOut.service.base";

@Injectable()
export class SignOutService extends SignOutServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
