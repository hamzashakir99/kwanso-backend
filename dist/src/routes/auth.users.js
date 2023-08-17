"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const user_controllers_1 = require("../controllers/user.controllers");
const router = express_1.default.Router();
router.post('/register', auth_1.registerMiddleware, user_controllers_1.registerUserController);
router.post('/login', auth_1.loginMiddleware, user_controllers_1.loginUserController);
exports.default = router;
