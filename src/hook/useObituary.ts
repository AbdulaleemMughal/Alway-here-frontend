import axios from "axios";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import type {
  UpdateObituaryPayload,
} from "../@types/obituary.type";
import toast from "react-hot-toast";

export const useObituary = () => {
  const { memorialId } = useParams();

  const getObituary = useCallback(async () => {
    try {
      const response = await axiosInstance.get(
        `/api/get-obituary/${memorialId}`,
      );
      return response.data.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data.message);
      }
      throw err;
    }
  }, [memorialId]);

  const updateObituary = useCallback(
    async (data: UpdateObituaryPayload) => {
      try {
        const response = await axiosInstance.patch(
          `/api/update-obituary/${memorialId}`,
          data,
        );
        toast.success(response.data.message);
        return response.data.data;
      } catch (err) {
        if (axios.isAxiosError(err)) {
          toast.error(err.response?.data.message);
        }
        throw err;
      }
    },
    [memorialId],
  );

  return {
    getObituary,
    updateObituary,
  };
};
