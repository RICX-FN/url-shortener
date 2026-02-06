import { Router } from "express";
import { LinkRepository } from "../repositories/LinkRepository.js";
import { LinkService } from "../services/LinkService.js";
import { LinkController } from "../controllers/LinkController.js";

const router = Router();

const linkRepository = new LinkRepository();
const linkService = new LinkService(linkRepository);
const linkController = new LinkController(linkService);

router.post("/shorten", (req, res) => linkController.handleShorten(req, res));
router.get("/:code", (req, res) => linkController.handleRedirect(req, res));

export { router };
