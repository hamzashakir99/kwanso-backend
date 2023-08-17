import express from 'express';

import { addTaskMiddleware } from '../middleware/task';
import { listTasksController, addTaskController } from '../controllers/tasks.controller';

const router = express.Router()


router.post('/add-task', addTaskMiddleware, addTaskController)
router.get('/list', listTasksController)

export default router;