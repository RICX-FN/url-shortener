export declare class LinkRepository {
    create(originalUrl: string, shortCode: string): Promise<{
        originalUrl: string;
        shortCode: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    findByCode(code: string): Promise<{
        originalUrl: string;
        shortCode: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    } | null>;
}
//# sourceMappingURL=LinkRepository.d.ts.map