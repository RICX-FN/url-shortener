import { prisma } from "../../lib/prisma.js";

export class LinkRepository {
  async create(originalUrl: string, shortCode: string) {
    return await prisma.link.create({
      data: { originalUrl, shortCode },
    });
  }

  async findByCode(code: string) {
    return await prisma.link.findUnique({
      where: { shortCode: code },
    });
  }
}
