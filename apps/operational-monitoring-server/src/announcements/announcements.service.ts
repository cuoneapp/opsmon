import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnnouncementsServiceBase } from "./base/announcements.service.base";

@Injectable()
export class AnnouncementsService extends AnnouncementsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
