import { NextFunction, Response, Request } from 'express';

import { addTaskValidationSchema } from '../validation/task.validation';

export const addTaskMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = addTaskValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next()
}