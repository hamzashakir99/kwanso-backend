"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_1 = require("../middleware/task");
const tasks_controller_1 = require("../controllers/tasks.controller");
const router = express_1.default.Router();
router.post('/add-task', task_1.addTaskMiddleware, tasks_controller_1.addTaskController);
router.get('/list', tasks_controller_1.listTasksController);
exports.default = router;
