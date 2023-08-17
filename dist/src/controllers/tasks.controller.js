"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTaskController = exports.listTasksController = void 0;
const tasks_1 = require("../queries/tasks");
const listTasksController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            message: 'successfully fetch list task', data: {
                tasks: yield (0, tasks_1.listTasks)()
            }
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.listTasksController = listTasksController;
const addTaskController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        res.status(201).json({
            message: 'task add successfully', data: {
                tasks: yield (0, tasks_1.addTask)({ name })
            }
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.addTaskController = addTaskController;
