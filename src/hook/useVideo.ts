import axios from "axios";
import toast from "react-hot-toast";
import { axiosInstance } from "../utils/axiosInstance";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import type { UpdateVideoPayload } from "../@types/video.type";

export const useVideo = () => {
  const { memorialId } = useParams();

  const getAllVideos = useCallback(async () => {
    try {
      const response = await axiosInstance.get(`/api/get-videos/${memorialId}`);
      return response.data.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data.message);
      }
      throw err;
    }
  }, [memorialId]);

  const updateVideo = useCallback(
    async (data: UpdateVideoPayload) => {
      try {
        const response = await axiosInstance.patch(
          `/api/update-video/${memorialId}`,
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

  const deleteVideo = useCallback(async (videoId: string) => {
    try {
      const response = await axiosInstance.delete(
        `/api/delete-video/${memorialId}/${videoId}`,
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
    getAllVideos,
    updateVideo,
    deleteVideo,
  };
};
