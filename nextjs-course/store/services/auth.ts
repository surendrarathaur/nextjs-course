import axios from 'axios'

const serverUrl = 'http://localhost:5000/';

export const register = (data: any) => axios.post(`${serverUrl}user/add`, data);

export const logInUser = (data: any) => axios.post(`${serverUrl}user/login`, data);

export const updateUser = (data: any, id:number) => axios.post(`${serverUrl}user/update/${id}`, data);

export const deleteUser = (data: any, id:number) => axios.post(`${serverUrl}user/${id}`, data);

export const getUser = () => axios.post(`${serverUrl}user`);