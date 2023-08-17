import 'dotenv/config'
import express, { NextFunction, Response, Request } from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import './src/config/passport-config';
import './src/config/db-config';


import authUserRouter from './src/routes/auth.users'
import userRouter from './src/routes/user'
import taskRouter from './src/routes/tasks'

const app = express();


app.use(bodyParser.json());


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('err.stack', err.stack)
    console.error('err.name', err.name)
    if (err.name === 'ValidationError' && err.details && err.details[0] && err.details[0].message) {
        return res.status(400).json({ message: err.details[0].message });
    }
    res.status(500).send('Something broke!')
})


app.use('/auth/users', authUserRouter)
app.use('/users', passport.authenticate('jwt', { session: false }), userRouter)
app.use('/', passport.authenticate('jwt', { session: false }), taskRouter)

app.listen(8000, () => {
    console.log('server working')
})