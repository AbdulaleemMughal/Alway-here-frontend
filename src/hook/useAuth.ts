import axios from "axios";
import type { UserType } from "../@types/user.type";
import { axiosInstance } from "../utils/axiosInstance";
import {
  removeTokenFromLocalStorage,
  saveTokenToLocalStorage,
} from "../utils/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/authSlice";
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
        dispatch(removeUser());
        navigate("/");
      }
    }
  };

  const logOut = async () => {
    try {
      await axiosInstance.post("/auth/logOut");
      toast.success("Logout Successfull");
      removeTokenFromLocalStorage();
      dispatch(removeUser());
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.message);
      }
    }
  };

  const signIn = async (data: UserType) => {
    try {
      const response = await axiosInstance.post("/auth/signUp", data);
      toast.success(response.data.message);
      saveTokenToLocalStorage(response.data.token);
      dispatch(addUser(response.data.data));
      navigate("/account");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.message);
      }
    }
  };

  return {
    logIn,
    getLoggedInUser,
    logOut,
    signIn,
  };
};
