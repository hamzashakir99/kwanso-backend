"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTaskMiddleware = void 0;
const task_validation_1 = require("../validation/task.validation");
const addTaskMiddleware = (req, res, next) => {
    const { error } = task_validation_1.addTaskValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
exports.addTaskMiddleware = addTaskMiddleware;
