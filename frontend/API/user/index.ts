import { IUserData, ILoginData } from '@/interfaces/user';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BACKEND_API || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const UserAPI = {
  createUser: async (userData: IUserData) => {
    return api.post('/users/create', userData);
  },
  getUsers: async () => {
    return api.get('/users');
  },
  getUserById: async (id: string) => {
    return api.get(`/users/${id}`);
  },
  updateUserById: async (id: string, userData: IUserData) => {
    return api.patch(`/users/${id}`, userData);
  },
  deleteUserById: async (id: string) => {
    return api.delete(`/users/${id}`);
  },
  // loginUser: async (loginData: ILoginData) => {
  //   try {
  //     const response = await api.post('/users/login', loginData);
  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  loginUser: async (loginData: ILoginData) => {
    return api.post('/users/login', loginData);
  },
};
