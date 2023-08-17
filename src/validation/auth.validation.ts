import Joi from 'joi';

import { getUserByUserName } from '../queries/user';

export const userRegisterValidationSchema = Joi.object({
    user_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .external(async (user_name) => {
            const unique = await getUserByUserName(user_name);
            if (unique) {
                throw new Error("Username is already in use");
            }
        }),
    password: Joi.string().min(8).required(),
});

export const userLoginValidationSchema = Joi.object({
    user_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string().required(),
});

