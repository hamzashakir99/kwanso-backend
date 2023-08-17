import { NextFunction, Request, Response } from 'express';
import { addTask, listUserTasks } from "../queries/tasks"

export const listTasksController = async (req: any, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({
            message: 'successfully fetch list task', data: {
                tasks: await listUserTasks(req?.user?._id)
            }
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const addTaskController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body
        const { user }: any = req;
        res.status(201).json({
            message: 'task add successfully', data: {
                tasks: await addTask({ name, user_id: user._id })
            }
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}
