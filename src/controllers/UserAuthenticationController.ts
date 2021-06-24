import { Request, Response } from 'express';
import UserAuthenticationService from '../services/UserAuthenticationService';

class UserAuthenticationController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const service = new UserAuthenticationService();

    const token = await service.execute({ email, password });

    return response.json(token);
  }
}

export default UserAuthenticationController;
