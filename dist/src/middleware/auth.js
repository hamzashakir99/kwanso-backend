"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginMiddleware = exports.registerMiddleware = void 0;
const auth_validation_1 = require("../validation/auth.validation");
const registerMiddleware = (req, res, next) => {
    const { error } = auth_validation_1.userRegisterValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
exports.registerMiddleware = registerMiddleware;
const loginMiddleware = (req, res, next) => {
    const { error } = auth_validation_1.userLoginValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
exports.loginMiddleware = loginMiddleware;
