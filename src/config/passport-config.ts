import strategy from 'passport-jwt';


import passport from 'passport';
import userModel from '../models/user';

const jwtStrategy = strategy.Strategy;
const extractJwt = strategy.ExtractJwt;


const opts: any = {}
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_ACCESS_SECRET;



passport.use(new jwtStrategy(opts, async function (jwt_payload, done) {
    try {
        const user = await userModel.findOne({ _id: jwt_payload._id });
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        console.log(error);
        return done(null, false);
    }
}));