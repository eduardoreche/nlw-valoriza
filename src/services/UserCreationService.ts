import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import UsersRepositories from '../repositories/UsersRepositories';

interface IUserCreationRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class UserCreationService {
  async execute({ name, email, password, admin }: IUserCreationRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) throw new Error('Email is invalid');

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) throw new Error('User already exists');

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: passwordHash,
      admin,
    });

    await usersRepository.save(user);

    return { id: user.id, name, email, admin };
  }
}

export default UserCreationService;
