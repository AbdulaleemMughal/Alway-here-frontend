import axios from "axios";
import { axiosInstance } from "../utils/axiosInstance";
import toast from "react-hot-toast";

export const useMemorial = () => {
  const getMemorialById = async (id: string) => {
    try {
      const response = await axiosInstance.get(`/api/memorial/${id}`);
      return response.data.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
    }
  };

  const getAllMemorials = async () => {
    try {
      const response = await axiosInstance.get(`/api/memorial`);
      return response.data.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
    }
  };

  const deleteMemorial = async (id: string) => {
    try {
      await axiosInstance.delete(`/api/memorial/${id}`);
      toast.success("Memorial Page deleted successfully!");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
    }
  };

  return { getMemorialById, getAllMemorials, deleteMemorial };
};
