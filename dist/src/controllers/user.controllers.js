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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.loginUserController = exports.registerUserController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../queries/user");
const jwt_utils_1 = require("../utils/jwt.utils");
const saltRounds = 10;
const registerUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_name, password } = req.body;
        const salt = bcrypt_1.default.genSaltSync(saltRounds);
        const hash = bcrypt_1.default.hashSync(password, salt);
        yield (0, user_1.addUser)({ user_name, password: hash });
        res.status(200).json({ message: 'account has been successfully' });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.registerUserController = registerUserController;
const loginUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_name, password } = req.body;
        const user = yield (0, user_1.getUserByUserName)(user_name);
        if (!user) {
            return res.status(401).json({ message: `Invalid credentials` });
        }
        if (!(yield bcrypt_1.default.compare(password, user.password))) {
            return res.status(401).json({ message: `Invalid credentials` });
        }
        const token = yield (0, jwt_utils_1.generateJwt)({
            _id: user === null || user === void 0 ? void 0 : user._id,
            user_name
        });
        res.status(200).json({
            message: 'login successfully', data: {
                token
            }
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.loginUserController = loginUserController;
const getProfile = (req, res, next) => {
    res.status(200).json(req.user);
};
exports.getProfile = getProfile;
