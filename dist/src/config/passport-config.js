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
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const passport_1 = __importDefault(require("passport"));
const user_1 = __importDefault(require("../models/user"));
const jwtStrategy = passport_jwt_1.default.Strategy;
const extractJwt = passport_jwt_1.default.ExtractJwt;
const opts = {};
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_ACCESS_SECRET;
passport_1.default.use(new jwtStrategy(opts, function (jwt_payload, done) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_1.default.findOne({ _id: jwt_payload._id });
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        }
        catch (error) {
            console.log(error);
            return done(null, false);
        }
    });
}));
