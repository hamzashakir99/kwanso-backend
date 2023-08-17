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
exports.userLoginValidationSchema = exports.userRegisterValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const user_1 = require("../queries/user");
exports.userRegisterValidationSchema = joi_1.default.object({
    username: joi_1.default.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .external((username) => __awaiter(void 0, void 0, void 0, function* () {
        const unique = yield (0, user_1.getUserByUserName)(username);
        if (unique) {
            throw new Error("Username is already in use");
        }
    })),
    password: joi_1.default.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
});
exports.userLoginValidationSchema = joi_1.default.object({
    username: joi_1.default.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: joi_1.default.string().required(),
});
