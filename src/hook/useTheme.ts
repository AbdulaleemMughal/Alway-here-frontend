import axios from "axios";
import toast from "react-hot-toast";
import { axiosInstance } from "../utils/axiosInstance";

export const useTheme = () => {
  const getTheme = async () => {
    try {
      const response = await axiosInstance.get("/api/get-theme");
      return response.data.themes;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      throw err;
    }
  };

  return {
    getTheme,
  };
};
