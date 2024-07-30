import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FormsServiceBase } from "./base/forms.service.base";

@Injectable()
export class FormsService extends FormsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
