import { Router } from 'express';
import { getAllUser } from '../controllers/test.controller.js';


const router = Router();

router
    .use('/users', getAllUser);


export default router;
