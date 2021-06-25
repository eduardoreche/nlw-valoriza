import { Router } from 'express';
import ComplimentCreationController from './controllers/ComplimentCreationController';
import ComplimentsGivenController from './controllers/ComplimentsGivenController';
import ComplimentsReceivedController from './controllers/ComplimentsReceivedController';
import TagCreationController from './controllers/TagCreationController';
import TagListController from './controllers/TagListController';
import UserAuthenticationController from './controllers/UserAuthenticationController';
import UserCreationController from './controllers/UserCreationController';
import UserListController from './controllers/UserListController';
import ensureAdmin from './middlewares/ensureAdmin';
import ensureAuthentication from './middlewares/ensureAuthentication';

const router = Router();

router.post('/login', new UserAuthenticationController().handle);

router.post('/users', ensureAuthentication, new UserCreationController().handle);
router.get('/users', ensureAuthentication, new UserListController().handle);
router.get('/users/compliments/given', ensureAuthentication, new ComplimentsGivenController().handle);
router.get('/users/compliments/received', ensureAuthentication, new ComplimentsReceivedController().handle);

router.post('/tags', ensureAuthentication, ensureAdmin, new TagCreationController().handle);
router.get('/tags', ensureAuthentication, new TagListController().handle);

router.post('/compliments', ensureAuthentication, new ComplimentCreationController().handle);

export default router;
