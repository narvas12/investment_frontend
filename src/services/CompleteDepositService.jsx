import { API } from "../api/apiEndpoints";
import axiosInstance from "../utils/axiosConfig";

const CompleteDepositService = {
  completeDeposit: async (depositData) => {
    try {
      const response = await axiosInstance.post(
        API.COMPLETE_DEPOSIT.ADD,
        depositData
      );

      return response.data;
    } catch (error) {
      console.error("Error in completeDeposit:", error);

      if (error.response) {
        throw new Error(
          error.response.data.message || "Failed to confirm deposit"
        );
      } else {
        throw new Error("Failed to confirm deposit");
      }
    }
  },
};

export default CompleteDepositService;
