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
exports.listTasks = exports.addTask = void 0;
const task_1 = __importDefault(require("../models/task"));
const addTask = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = new task_1.default(payload);
    return yield data.save();
});
exports.addTask = addTask;
const listTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield task_1.default.find();
});
exports.listTasks = listTasks;
