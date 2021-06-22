import { Request, Response } from 'express';
import UserCreationService from '../services/UserCreationService';

class UserCreationController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const service = new UserCreationService();

    const user = await service.execute({ name, email, admin });

    return response.json(user);
  }
}

export default UserCreationController;
