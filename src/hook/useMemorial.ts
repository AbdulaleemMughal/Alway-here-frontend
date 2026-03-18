import axios from "axios";
import { axiosInstance } from "../utils/axiosInstance";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addMemorial } from "../store/memorialSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback } from "react";
import type { MemorialType } from "../@types/memorial.type";

export const useMemorial = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { memorialId } = useParams();

  const getMemorialById = async (id: string) => {
    try {
      const response = await axiosInstance.get(`/api/memorial/${id}`);
      dispatch(addMemorial(response.data.data));
      return response.data.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.message);
        navigate("/account");
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

  const updateMemorial = useCallback(async (data: MemorialType) => {
    try {
      const response = await axiosInstance.patch(
        `/api/memorial/${memorialId}`,
        data,
      );
      dispatch(addMemorial(response.data.data));
      toast.success(response.data.message);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.message || "Error While Updating Data.");
      }
    }
  }, []);

  return { getMemorialById, getAllMemorials, deleteMemorial, updateMemorial };
};
