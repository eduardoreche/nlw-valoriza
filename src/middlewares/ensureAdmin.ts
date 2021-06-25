import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import UsersRepositories from '../repositories/UsersRepositories';

async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const { user_id } = request;
  const repository = getCustomRepository(UsersRepositories);
  const user = await repository.findOne(user_id);

  if (user.admin) return next();

  return response.status(401).json({
    error: 'Unauthorized',
  });
}

export default ensureAdmin;
