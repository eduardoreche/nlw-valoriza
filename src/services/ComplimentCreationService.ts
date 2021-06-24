import { getCustomRepository } from 'typeorm';
import ComplimentsRepositories from '../repositories/ComplimentsRepositories';
import UsersRepositories from '../repositories/UsersRepositories';

interface ICommplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class ComplimentCreationService {
  async execute({ user_sender, user_receiver, tag_id, message }: ICommplimentRequest) {
    if (user_sender === user_receiver) throw new Error('Sender and Receiver must be different Users');

    const complimentsRepository = getCustomRepository(ComplimentsRepositories);
    const userRepository = getCustomRepository(UsersRepositories);

    const receiver = await userRepository.findOne(user_receiver);

    if (!receiver) throw new Error('Receiver does not exist');

    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    complimentsRepository.save(compliment);

    return compliment;
  }
}

export default ComplimentCreationService;
