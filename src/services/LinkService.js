export class LinkService {
    linkRepository;
    constructor(linkRepository) {
        this.linkRepository = linkRepository;
    }
    async shortenUrl(originalUrl) {
        //validar se a url é valida
        //gerar codigo
        const shortCode = Math.random().toString(36).substring(2, 8);
        return await this.linkRepository.create(originalUrl, shortCode);
    }
    async getOriginalUrl(code) {
        const linkOriginal = await this.linkRepository.findByCode(code);
        if (!linkOriginal) {
            throw new Error("Link não encontrado");
        }
        return linkOriginal.originalUrl;
    }
}
//# sourceMappingURL=LinkService.js.map