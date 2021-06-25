import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import UsersRepositories from '../repositories/UsersRepositories';

interface AuthRequest {
  email: string;
  password: string;
}

class UserAuthenticationService {
  async execute({ email, password }: AuthRequest) {
    const repository = getCustomRepository(UsersRepositories);

    const user = await repository.findOne({ email });
    const validCredentials = user ? await compare(password, user.password) : false;

    if (!validCredentials) throw new Error('Wrong credentials');

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '1h',
      }
    );

    return token;
  }
}

export default UserAuthenticationService;
