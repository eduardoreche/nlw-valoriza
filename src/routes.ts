import { Router } from 'express';
import TagCreationController from './controllers/TagCreationController';
import UserCreationController from './controllers/UserCreationController';
import ensureAdmin from './middlewares/ensureAdmin';

const router = Router();

router.post('/users', new UserCreationController().handle);
router.post('/tags', ensureAdmin, new TagCreationController().handle);

export default router;
