export class LinkController {
    linkService;
    constructor(linkService) {
        this.linkService = linkService;
    }
    async handleShorten(req, res) {
        const { url } = req.body;
        try {
            const link = await this.linkService.shortenUrl(url);
            return res.status(201).json(link);
        }
        catch (error) {
            return res.status(400).json({ error: "Erro ao encurtar URL" });
        }
    }
    async handleRedirect(req, res) {
        const { code } = req.params;
        try {
            const originalUrl = await this.linkService.getOriginalUrl(code);
            res.redirect(originalUrl);
        }
        catch (error) {
            return res.status(404).json({ message: "URL não encontrada" });
        }
    }
}
//# sourceMappingURL=LinkController.js.map