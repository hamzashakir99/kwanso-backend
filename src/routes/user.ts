import express from 'express';


import { getProfile } from '../controllers/user.controllers';

const router = express.Router()


router.get('/', getProfile)

export default router;