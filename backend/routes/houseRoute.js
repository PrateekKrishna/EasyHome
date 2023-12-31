import express from 'express'
import { createProperty, deleteProperty, getAllProperties, getPropertyDetail, updateProperty } from "../controllers/houseController.js";
import { requireAuth } from '../middleware/requireAuth.js';
import singleUpload from '../middleware/multer.js';


const router = express.Router()

//require auth for all house routes
router.use(requireAuth)

router.route('/').get(getAllProperties);
router.route('/:id').get(getPropertyDetail);
router.route('/').post(singleUpload, createProperty);
router.route('/:id').patch(singleUpload, updateProperty);
router.route('/:id').delete(deleteProperty);

export default router;

