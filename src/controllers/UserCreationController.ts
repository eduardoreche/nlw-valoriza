import { Request, Response } from 'express';
import UserCreationService from '../services/UserCreationService';

class UserCreationController {
  async handle(request: Request, response: Response) {
    const { name, email, password, admin } = request.body;

    const service = new UserCreationService();

    const user = await service.execute({ name, email, password, admin });

    return response.json(user);
  }
}

export default UserCreationController;
