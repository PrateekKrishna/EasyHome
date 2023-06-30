import  express  from 'express';
import { getAllUsers, createUser, getUserInfoByID } from '../controllers/userController.js'

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserInfoByID);

export default router;