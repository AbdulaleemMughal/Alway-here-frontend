import axios from "axios";
import type { UserType } from "../@types/user.type";
import { axiosInstance } from "../utils/axiosInstance";
import { saveTokenToLocalStorage } from "../utils/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../store/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logIn = async (data: UserType) => {
    try {
      const response = await axiosInstance.post("/auth/logIn", data);
      saveTokenToLocalStorage(response.data.token);
      dispatch(addUser(response.data.data));
      toast.success(response.data.message);
      navigate("/account");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.message);
      }
    }
  };

  const getLoggedInUser = async () => {
    try {
      const response = await axiosInstance.get("/auth/getUser");
      dispatch(addUser(response.data.user));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.message);
      }
    }
  };

  return {
    logIn,
    getLoggedInUser,
  };
};
