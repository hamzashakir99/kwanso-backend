import Joi from 'joi';



export const addTaskValidationSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(1)
        .max(30)
        .required()
});

