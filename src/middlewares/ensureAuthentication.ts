import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

const ensureAuthentication = (request: Request, response: Response, next: NextFunction) => {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) return unauthorizedResponse(response);

  const [, token] = authorizationHeader.split(' ');

  try {
    const { sub } = verify(token, process.env.JWT_SECRET);

    request.user_id = sub as string;

    return next();
  } catch (err) {
    return unauthorizedResponse(response);
  }
};

const unauthorizedResponse = (response: Response) => response.status(401).json('Unauthorized');

export default ensureAuthentication;
