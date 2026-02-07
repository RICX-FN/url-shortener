import { prisma } from "../../lib/prisma.js";
export class LinkRepository {
    async create(originalUrl, shortCode) {
        return await prisma.link.create({
            data: { originalUrl, shortCode },
        });
    }
    async findByCode(code) {
        return await prisma.link.findUnique({
            where: { shortCode: code },
        });
    }
}
//# sourceMappingURL=LinkRepository.js.map