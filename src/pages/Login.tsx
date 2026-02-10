import { Eye, EyeClosed } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";
import { Input } from "../UI/Input";
import type { UserType } from "../@types/user.type";
import { useAuth } from "../hook/useAuth";

export const Login = () => {
  const { logIn } = useAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserType>({} as UserType);
  const [loading, setLoading] = useState<boolean>(false);

  const handleUserValue = (field: keyof UserType, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    await logIn(userData).finally(() => {
      setLoading(false);
      setUserData({} as UserType);
    });
  };

  return (
    <>
      <div className="flex items-center justify-center h-[calc(100vh-11vh)] bg-(--background-color) max-sm:px-5">
        <form
          className="w-150 flex flex-col items-center bg-white shadow-2xl py-11.25 px-13.75 rounded-xl max-md:p-5"
          onSubmit={handleLogin}
        >
          <h1 className="text-[32px] text-(--primary-color) font-[Spectral] mb-7.5">
            Login
          </h1>
          <Input
            placeholder="Enter Email"
            value={userData.email}
            onChange={(e) => handleUserValue("email", e.target.value)}
          />
          <div className="px-5 py-2.5 mb-2 bg-[#f2f2f2] w-full rounded-lg outline-none text-[16px] flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full outline-none"
              value={userData.password}
              onChange={(e) => handleUserValue("password", e.target.value)}
            />
            {showPassword ? (
              <Eye
                color="gray"
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeClosed
                color="gray"
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          <Link
            to={"/forget-password"}
            className="text-[12px] text-(--primary-color) font-[Poppins] mt-2.5 ml-auto my-2"
          >
            FORGOT PASSWORD
          </Link>
          <Button
            type="submit"
            text="Login"
            disable={loading}
            className="w-full rounded-lg"
            onClick={() => handleLogin}
          />
          <Link
            to={"/signup"}
            className="text-[16px] font-[Poppins] mt-10 text-(--primary-color)"
          >
            Click here to Register Now
          </Link>
        </form>
      </div>
    </>
  );
};
