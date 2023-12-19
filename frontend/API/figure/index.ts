import { IFigureData } from '@/interfaces/figure';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BACKEND_API || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const FigureAPI = {
  createFigure: async (figureData: IFigureData) => {
    return api.post('/figures/create', figureData);
  },
  getFigures: async () => {
    return api.get('/figures');
  },
  getFigureById: async (id: string) => {
    return api.get(`/figures/${id}`);
  },
  updateFigureById: async (id: string, figureData: IFigureData) => {
    return api.patch(`/figures/${id}`, figureData);
  },
  deleteFigureById: async (id: string) => {
    return api.delete(`/figures/${id}`);
  }
};
