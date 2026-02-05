import { LinkRepository } from "../repositories/LinkRepository.js";

export class LinkService {
  constructor(private linkRepository: LinkRepository) {}

  async shortenUrl(originalUrl: string) {
    //validar se a url é valida

    //gerar codigo
    const shortCode = Math.random().toString(36).substring(2, 8);

    return await this.linkRepository.create(originalUrl, shortCode);
  }
}
