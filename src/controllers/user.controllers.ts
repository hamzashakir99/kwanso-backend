import { NextFunction, Response, Request } from 'express';
import bcrypt from 'bcrypt';

import { addUser, getUserByUserName } from '../queries/user';
import { generateJwt } from '../utils/jwt.utils';

const saltRounds = 10;

export const registerUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_name, password } = req.body;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        await addUser({ user_name, password: hash })
        res.status(200).json({ message: 'account has been successfully' })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const loginUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_name, password } = req.body;
        const user: any = await getUserByUserName(user_name)
        if (!user) {
            return res.status(401).json({ message: `Invalid credentials` })
        }
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: `Invalid credentials` })
        }
        const token = await generateJwt({
            _id: user?._id,
            user_name
        })
        res.status(200).json({
            message: 'login successfully', data: {
                token
            }
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const getProfile = (req: any, res: Response, next: NextFunction) => {
    res.status(200).json({
        _id: req?.user?._id,
        user_name: req?.user?.user_name
    })
}

