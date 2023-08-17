import taskModals from '../models/task';

export const addTask = async (payload: object) => {
    const data = new taskModals(payload)
    return await data.save()
};

export const listUserTasks = async (user_id: string) => {
    return await taskModals.find({user_id})
};