import { Request, Response } from 'express';
import Compliment from '../entities/Compliment';
import ComplimentCreationService from '../services/ComplimentCreationService';

class ComplimentCreationController {
  async handle(request: Request, response: Response) {
    const user_sender = 'c8269886-c75f-4854-8ffd-9b4bb8f92823'; //TODO: get from authenticated user

    const { user_receiver, tag_id, message } = request.body;

    const service = new ComplimentCreationService();

    const compliment = await service.execute({ user_sender, user_receiver, tag_id, message });

    response.json(compliment);
  }
}

export default ComplimentCreationController;
