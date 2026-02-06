import { LinkService } from "../services/LinkService.js";
import { Request, Response } from "express";

export class LinkController {
  constructor(private linkService: LinkService) {}

  async handleShorten(req: Request, res: Response) {
    const { url } = req.body;
    try {
      const link = await this.linkService.shortenUrl(url);
      return res.status(201).json(link);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao encurtar URL" });
    }
  }

  async handleRedirect(req: Request<{ code: string }>, res: Response) {
    const { code } = req.params;
    try {
      const originalUrl = await this.linkService.getOriginalUrl(code);
      res.redirect(originalUrl);
    } catch (error) {
      return res.status(404).json({ message: "URL não encontrada" });
    }
  }
}
