import { Router } from 'express';
import TagCreationController from './controllers/TagCreationController';
import UserCreationController from './controllers/UserCreationController';

const router = Router();

router.post('/users', new UserCreationController().handle);

router.post('/tags', new TagCreationController().handle);

export default router;
