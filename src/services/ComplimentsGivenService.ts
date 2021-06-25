import { getCustomRepository } from 'typeorm';
import ComplimentsRepositories from '../repositories/ComplimentsRepositories';

class ComplimentsGivenService {
  async execute(user_id: string) {
    const repository = getCustomRepository(ComplimentsRepositories);

    const compliments = await repository.find({
      where: {
        user_sender: user_id,
      },
      relations: ['userSender', 'userReceiver', 'tag'],
    });

    return compliments;
  }
}

export default ComplimentsGivenService;
