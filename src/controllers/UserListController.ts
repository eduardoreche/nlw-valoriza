import { Request, Response } from 'express';
import UserListService from '../services/UserListService';

class UserListController {
  async handle(request: Request, response: Response) {
    const service = new UserListService();

    const users = await service.execute();

    return response.json(users);
  }
}

export default UserListController;
