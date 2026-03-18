import axios from "axios";
import { useCallback } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import type { UpdateFavouritePayload } from "../@types/favourite.type";

export const useFavourite = () => {
  const { memorialId } = useParams();

  const getFavourites = useCallback(async () => {
    try {
      const response = await axiosInstance.get(
        `/api/get-favourite/${memorialId}`,
      );
      return response.data.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data.message);
      }
      throw err;
    }
  }, [memorialId]);

  const updateFavourite = useCallback(
    async (data: UpdateFavouritePayload, favId?: string) => {
      if (!favId) {
        try {
          const response = await axiosInstance.patch(
            `/api/update-favourite/${memorialId}`,
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
      }

      try {
        const response = await axiosInstance.patch(
          `/api/update-favourite/${memorialId}/${favId}`,
          data,
        );
      } catch (err) {
        if (axios.isAxiosError(err)) {
          toast.error(err.response?.data.message);
        }
        throw err;
      }
    },
    [memorialId],
  );

  const deleteFavourite = useCallback(async (id: string) => {
    try {
      const response = await axiosInstance.delete(
        `/api/delete-favourite/${memorialId}/${id}`,
      );
      toast.success(response.data.message);
      return response.data.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
    }
  }, []);

  return {
    getFavourites,
    updateFavourite,
    deleteFavourite,
  };
};
