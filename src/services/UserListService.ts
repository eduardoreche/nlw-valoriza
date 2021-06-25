import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import UsersRepositories from '../repositories/UsersRepositories';

class UserListService {
  async execute() {
    const repository = getCustomRepository(UsersRepositories);

    const users = await repository.find();

    return classToPlain(users);
  }
}

export default UserListService;
