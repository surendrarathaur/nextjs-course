import { 
    REGISTER_USER, 
    LOGIN_USER, 
    UPDATE_USER,
    DELETE_USER,
    GET_USER
} from './type'

import { register, logInUser, getUser } from '../services/auth';

export const registerUser = (userData:any) => ({
    type: REGISTER_USER,
    payload: new Promise(async (resolve, reject) => {
        try {
            console.log('action Data', userData)
            const response = await register(userData);
            return resolve(response);
        } catch (error) {
            console.log(error);
            return reject(error);
        }
    })
});

export const loginUser = (userData:any) => ({
    type: LOGIN_USER,
    payload: new Promise(async (resolve, reject) => {
        try {
            console.log('action Data', userData)
            const response = await logInUser(userData);
            return resolve(response);
        } catch (error) {
            console.log(error);
            return reject(error);
        }
    })
});

export const fetchUser = () => ({
    type: GET_USER,
    payload: new Promise(async (resolve, reject) => {
        try {
            const response = await getUser();
            return resolve(response);
        } catch (error) {
            console.log(error);
            return reject(error);
        }
    })
});