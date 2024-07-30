/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Announcements as PrismaAnnouncements } from "@prisma/client";

export class AnnouncementsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AnnouncementsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.announcements.count(args);
  }

  async announcementsItems(
    args: Prisma.AnnouncementsFindManyArgs
  ): Promise<PrismaAnnouncements[]> {
    return this.prisma.announcements.findMany(args);
  }
  async announcements(
    args: Prisma.AnnouncementsFindUniqueArgs
  ): Promise<PrismaAnnouncements | null> {
    return this.prisma.announcements.findUnique(args);
  }
  async createAnnouncements(
    args: Prisma.AnnouncementsCreateArgs
  ): Promise<PrismaAnnouncements> {
    return this.prisma.announcements.create(args);
  }
  async updateAnnouncements(
    args: Prisma.AnnouncementsUpdateArgs
  ): Promise<PrismaAnnouncements> {
    return this.prisma.announcements.update(args);
  }
  async deleteAnnouncements(
    args: Prisma.AnnouncementsDeleteArgs
  ): Promise<PrismaAnnouncements> {
    return this.prisma.announcements.delete(args);
  }
}
