"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
require("./src/config/passport-config");
const auth_users_1 = __importDefault(require("./src/routes/auth.users"));
const user_1 = __importDefault(require("./src/routes/user"));
const tasks_1 = __importDefault(require("./src/routes/tasks"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/auth/users', auth_users_1.default);
app.use('/users', passport_1.default.authenticate('jwt', { session: false }), user_1.default);
app.use('/', passport_1.default.authenticate('jwt', { session: false }), tasks_1.default);
app.listen(8000, () => {
    console.log('server working');
});
