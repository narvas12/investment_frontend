import axiosInstance from '../utils/axiosConfig';
import { API } from '../api/apiEndpoints';

// Fetch deposit list
export const getDeposits = async () => {
  const response = await axiosInstance.get(API.TRANSACTIONS.DEPOSITS);
  return response.data;
};

// Fetch withdrawal list
export const getWithdrawals = async () => {
  const response = await axiosInstance.get(API.TRANSACTIONS.WITHDRAWALS);
  return response.data;
};

// Add a new deposit
export const addDeposit = async (depositData) => {
  const response = await axiosInstance.post(API.TRANSACTIONS.ADD_DEPOSIT, depositData);
  return response.data;
};

// Add a new withdrawal
export const addWithdrawal = async (withdrawalData) => {
  const response = await axiosInstance.post(API.TRANSACTIONS.ADD_WITHDRAWAL, withdrawalData);
  return response.data;
};
