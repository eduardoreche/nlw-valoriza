import { getCustomRepository } from 'typeorm';
import UsersRepositories from '../repositories/UsersRepositories';

interface IUserCreationRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class UserCreationService {
  async execute({ name, email, admin }: IUserCreationRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) throw new Error('Email is invalid');

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) throw new Error('User already exists');

    const user = usersRepository.create({
      name,
      email,
      admin,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default UserCreationService;
