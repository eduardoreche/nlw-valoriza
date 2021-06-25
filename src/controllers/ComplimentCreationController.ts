import { Request, Response } from 'express';
import Compliment from '../entities/Compliment';
import ComplimentCreationService from '../services/ComplimentCreationService';

class ComplimentCreationController {
  async handle(request: Request, response: Response) {
    const { user_id: user_sender } = request;

    const { user_receiver, tag_id, message } = request.body;

    const service = new ComplimentCreationService();

    const compliment = await service.execute({ user_sender, user_receiver, tag_id, message });

    response.json(compliment);
  }
}

export default ComplimentCreationController;
