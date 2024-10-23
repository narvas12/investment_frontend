import axiosInstance from '../utils/axiosConfig';
import { API } from '../api/apiEndpoints';

// Fetch user earnings
export const getEarnings = async () => {
  const response = await axiosInstance.get(API.EARNINGS.LIST);
  return response.data;
};

// Fetch earnings details
export const getEarningsDetails = async (earningId) => {
  const response = await axiosInstance.get(API.EARNINGS.DETAILS(earningId));
  return response.data;
};
