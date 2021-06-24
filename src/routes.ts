import { Router } from 'express';
import ComplimentCreationController from './controllers/ComplimentCreationController';
import TagCreationController from './controllers/TagCreationController';
import UserAuthenticationController from './controllers/UserAuthenticationController';
import UserCreationController from './controllers/UserCreationController';
import ensureAdmin from './middlewares/ensureAdmin';

const router = Router();

router.post('/login', new UserAuthenticationController().handle);
router.post('/users', new UserCreationController().handle);
router.post('/tags', ensureAdmin, new TagCreationController().handle);
router.post('/compliments', new ComplimentCreationController().handle);

export default router;
