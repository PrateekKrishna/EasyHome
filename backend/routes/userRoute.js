import  express  from 'express';
import { getUser, createUser, getUserProperties } from '../controllers/userController.js'
import { requireAuth } from '../middleware/requireAuth.js';
const router = express.Router();
router.use(requireAuth)

router.route('/').get(getUser);
router.route('/').post(createUser);
router.route('/userprop').get(getUserProperties);

export default router;