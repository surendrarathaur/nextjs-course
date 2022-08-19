import axios from 'axios'

export const register = (data: any) => {
    console.log('axios Data', data)
    return axios.post(`user/add`, data);
};

export const logInUser = (data: any) => {
    console.log('axios Data', data)
    return axios.post(`user/login`, data);
};

export const updateUser = (data: any) => {
    console.log('axios Data', data)
    return axios.post(`user/update`, data);
};

export const deleteUser = (data: any) => {
    console.log('axios Data', data)
    return axios.post(`user/:id`, data);
};

export const getUser = () => {
    return axios.post(`/user/`);
};