import axiosInstance from '../utils/axiosConfig';
import { API } from '../api/apiEndpoints';

export const getOverview = async () => {
  try {
    const response = await axiosInstance.get(API.DASHBOARD.OVERVIEW);  
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard overview:', error);
    throw error;
  }
};
