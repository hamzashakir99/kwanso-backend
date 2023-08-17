import { NextFunction, Response, Request } from 'express';

import { userRegisterValidationSchema, userLoginValidationSchema } from '../validation/auth.validation';

export const registerMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    try {
        await userRegisterValidationSchema.validateAsync(req.body);
        next()
    } catch (error: any) {
        console.log(error)
        res.status(400).json({ message: error?.details && error?.details[0] ? error?.details[0]?.message: error?.message });
    }
}

export const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = userLoginValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next()
}

