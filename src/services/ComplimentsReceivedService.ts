import { getCustomRepository } from 'typeorm';
import ComplimentsRepositories from '../repositories/ComplimentsRepositories';

class ComplimentsReceivedService {
  async execute(user_id: string) {
    const repository = getCustomRepository(ComplimentsRepositories);

    const compliments = await repository.find({
      where: {
        user_receiver: user_id,
      },
      relations: ['userSender', 'userReceiver', 'tag'],
    });

    return compliments;
  }
}

export default ComplimentsReceivedService;
