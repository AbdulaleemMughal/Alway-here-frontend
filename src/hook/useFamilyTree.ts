import axios from "axios";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import type { FamilyTreeType, TreeDataType } from "../@types/familyTree.type";
import toast from "react-hot-toast";

export const useFamilyTree = () => {
  const { memorialId } = useParams();

  const getFamilyTree = useCallback(async () => {
    try {
      const response = await axiosInstance.get(
        `/api/get-familyTree/${memorialId}`,
      );
      if (response.data.success) {
        return response.data.data;
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data.message);
      }
    }
  }, [memorialId]);

  const updateFamilyTree = useCallback(
    async (data: FamilyTreeType | { treeData: TreeDataType }) => {
      console.log("Updating family tree with data:", data);
      try {
        const response = await axiosInstance.patch(
          `/api/update-familyTree/${memorialId}`,
          data,
        );
        toast.success(response.data.message);
        return response.data.data;
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.error(err.response?.data.message);
        }
      }
    },
    [memorialId],
  );

  return {
    getFamilyTree,
    updateFamilyTree,
  };
};
