import { Request, Response } from 'express';
import TagCreationService from '../services/TagCreationService';

class TagCreationController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const service = new TagCreationService();
    const tag = await service.execute(name);

    return response.json(tag);
  }
}

export default TagCreationController;
