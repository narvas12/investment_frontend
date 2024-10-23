import axiosInstance from '../utils/axiosConfig';
import { API } from '../api/apiEndpoints';

export const listPaymentAccounts = async () => {
  try {
    const response = await axiosInstance.get(API.USER_PAYMENT_ACCOUNTS.LIST);
    return response.data; 
  } catch (error) {
    console.error('Error fetching payment accounts:', error);
    throw error; 
  }
};

export const createPaymentAccount = async (paymentAccountData) => {
  try {
    const response = await axiosInstance.post(API.USER_PAYMENT_ACCOUNTS.ADD, paymentAccountData);
    return response.data; 
  } catch (error) {
    console.error('Error creating payment account:', error);
    throw error; 
  }
};
