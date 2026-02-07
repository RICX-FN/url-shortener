import { LinkRepository } from "../repositories/LinkRepository.js";
export declare class LinkService {
    private linkRepository;
    constructor(linkRepository: LinkRepository);
    shortenUrl(originalUrl: string): Promise<{
        originalUrl: string;
        shortCode: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    getOriginalUrl(code: string): Promise<string>;
}
//# sourceMappingURL=LinkService.d.ts.map