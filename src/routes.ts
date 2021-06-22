import { Router } from 'express';
import UserCreationController from './controllers/UserCreationController';

const router = Router();

router.post('/users', new UserCreationController().handle);

export default router;
