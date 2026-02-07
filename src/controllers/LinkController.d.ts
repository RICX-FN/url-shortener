import { LinkService } from "../services/LinkService.js";
import { Request, Response } from "express";
export declare class LinkController {
    private linkService;
    constructor(linkService: LinkService);
    handleShorten(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    handleRedirect(req: Request<{
        code: string;
    }>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=LinkController.d.ts.map