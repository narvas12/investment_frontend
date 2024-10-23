import axiosInstance from '../utils/axiosConfig'; 

const BonusService = {
  // Add a new bonus
  addBonus: async (bonusData) => {
    try {
      const response = await axiosInstance.post('/bonuses/', bonusData);
      return response.data;
    } catch (error) {
      // Handle errors here, for example by logging them or returning a custom error message
      console.error('Error adding bonus:', error.response ? error.response.data : error.message);
      throw error;
    }
  },
};

export default BonusService;
