import { Request, Response} from "express";
import { CreateTagService } from "../services/CreateTagsService";


class CreateTagController {

    async handle (request: Request, response: Response) {
        const { name } = request.body
        const createTgService = new CreateTagService();

        const tag = await createTgService.execute(name);

        return response.json(tag)
    }
}

export { CreateTagController}