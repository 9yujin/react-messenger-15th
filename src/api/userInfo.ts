import { UserType } from '../Interface';

export const getUserInfoById = (userId: number, userData: UserType[]) => {
    const userObj = userData.filter((user) => user.userId === userId);
    return userObj;
};
