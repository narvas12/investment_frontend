import axiosInstance from '../utils/axiosConfig';
import { API } from '../api/apiEndpoints';

// Fetch list of investments
export const getInvestments = async () => {
  const response = await axiosInstance.get(API.INVESTMENTS.LIST);
  return response.data;
};

// Create a new investment
export const createInvestment = async (investmentData) => {
  const response = await axiosInstance.post(API.INVESTMENTS.CREATE, investmentData);
  return response.data;
};

// Get investment details
export const getInvestmentDetails = async (investmentId) => {
  const response = await axiosInstance.get(API.INVESTMENTS.DETAILS(investmentId));
  return response.data;
};
