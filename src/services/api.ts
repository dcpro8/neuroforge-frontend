import axios from 'axios';
import type { Blueprint } from '../types/blueprint';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 300000,
});

export const generateBlueprint = async (idea: string): Promise<Blueprint> => {
  try {
    const response = await apiClient.post<Blueprint>('/generate', { idea });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || error.response?.data?.message || 'Failed to connect to the server. Please try again later.');
    }
    throw new Error('An unexpected error occurred while generating the blueprint.');
  }
};
