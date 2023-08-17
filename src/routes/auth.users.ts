import express from 'express';

import { registerMiddleware, loginMiddleware } from '../middleware/auth';
import { registerUserController, loginUserController } from '../controllers/user.controllers';

const router = express.Router()


router.post('/register', registerMiddleware, registerUserController)
router.post('/login', loginMiddleware, loginUserController)

export default router;