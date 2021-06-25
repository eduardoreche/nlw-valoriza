import { Request, Response } from 'express';
import TagListService from '../services/TagListService';

class TagListController {
  async handle(request: Request, response: Response) {
    const service = new TagListService();

    const tags = await service.execute();

    return response.json(tags);
  }
}

export default TagListController;
