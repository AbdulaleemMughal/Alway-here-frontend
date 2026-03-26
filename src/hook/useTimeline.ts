import axios from "axios";
import { axiosInstance } from "../utils/axiosInstance";
import { useParams } from "react-router-dom";
import type { TimelinePayload } from "../@types/timeline.type";
import toast from "react-hot-toast";

export const useTimeline = () => {
  const { memorialId } = useParams();

  const getTimeline = async () => {
    try {
      const response = await axiosInstance(`/api/get-timeline/${memorialId}`);
      return response.data.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data.message);
      }
      throw err;
    }
  };

  const updateTimeline = async (data: TimelinePayload, timelineId?: string) => {
    if (!timelineId) {
      try {
        const response = await axiosInstance.patch(
          `/api/update-timeline/${memorialId}`,
          data,
        );
        toast.success(response.data.message);
        return response.data.data;
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.error(err.response?.data.message);
        }
        throw err;
      }
    }

    try {
      const response = await axiosInstance.patch(
        `/api/update-timeline/${memorialId}/${timelineId}`,
        data,
      );
      toast.success(response.data.data);
      return response.data.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
      throw err;
    }
  };

  const deleteTimeline = async (id: string) => {
    try {
      const response = await axiosInstance.delete(
        `/api/delete-timeline/${memorialId}/${id}`,
      );
      toast.success(response.data.message);
      return response.data.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
    }
  };

  return {
    getTimeline,
    updateTimeline,
    deleteTimeline,
  };
};
