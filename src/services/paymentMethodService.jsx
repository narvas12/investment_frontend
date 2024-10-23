// src/services/paymentMethodService.js
import axiosInstance from '../utils/axiosConfig';
import { API } from '../api/apiEndpoints';

const PaymentMethodService = {
  // Fetch all payment methods
  fetchAll: async () => {
    try {
      const response = await axiosInstance.get(API.PAYMENT_METHODS.LIST);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
  
  // Add new payment methods
  addPaymentMethod: async (data) => {
    try {
      const response = await axiosInstance.post(API.PAYMENT_METHODS.ADD, data);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  // Fetch single payment method by ID
  fetchById: async (id) => {
    try {
      const response = await axiosInstance.get(API.PAYMENT_METHODS.DETAIL(id));
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  // Update payment method by ID
  updatePaymentMethod: async (id, data) => {
    try {
      const response = await axiosInstance.put(API.PAYMENT_METHODS.DETAIL(id), data);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  // Delete payment method by ID
  deletePaymentMethod: async (id) => {
    try {
      const response = await axiosInstance.delete(API.PAYMENT_METHODS.DETAIL(id));
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },
};

export default PaymentMethodService;
