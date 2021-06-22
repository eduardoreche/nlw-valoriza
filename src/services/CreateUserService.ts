import UsersRepositories from '../repositories/UsersRepositories';

interface IUserCreateRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserCreateRequest) {
    const usersRepository = new UsersRepositories();

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

export default CreateUserService;
