import { Request, Response } from 'express';
import ComplimentsGivenService from '../services/ComplimentsGivenService';

class ComplimentsGivenController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const service = new ComplimentsGivenService();

    const compliments = await service.execute(user_id);

    return response.json(compliments);
  }
}

export default ComplimentsGivenController;
