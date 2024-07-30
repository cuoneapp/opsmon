/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Members as PrismaMembers } from "@prisma/client";

export class MembersServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MembersCountArgs, "select">): Promise<number> {
    return this.prisma.members.count(args);
  }

  async membersItems(
    args: Prisma.MembersFindManyArgs
  ): Promise<PrismaMembers[]> {
    return this.prisma.members.findMany(args);
  }
  async members(
    args: Prisma.MembersFindUniqueArgs
  ): Promise<PrismaMembers | null> {
    return this.prisma.members.findUnique(args);
  }
  async createMembers(args: Prisma.MembersCreateArgs): Promise<PrismaMembers> {
    return this.prisma.members.create(args);
  }
  async updateMembers(args: Prisma.MembersUpdateArgs): Promise<PrismaMembers> {
    return this.prisma.members.update(args);
  }
  async deleteMembers(args: Prisma.MembersDeleteArgs): Promise<PrismaMembers> {
    return this.prisma.members.delete(args);
  }
}
