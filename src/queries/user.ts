import userModals from '../models/user';

export const addUser = async (payload: object) => {
    const data = new userModals(payload)
    return await data.save()
};

export const getUserByUserName = async (user_name: string) => {
    return await userModals.findOne({user_name})
};