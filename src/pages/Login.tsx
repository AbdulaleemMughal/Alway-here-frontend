import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center justify-center h-[calc(100vh-11vh)] bg-(--background-color) max-sm:px-5">
        <form className="w-150 flex flex-col items-center bg-white shadow-2xl py-11.25 px-13.75 rounded-xl">
          <h1 className="text-[32px] text-(--primary-color) font-[Spectral] mb-7.5">
            Login
          </h1>
          <input
            type="text"
            placeholder="Enter Email"
            className="px-5 py-2.5 bg-[#f2f2f2] w-full rounded-lg mb-5 outline-none text-[16px]"
          />
          <div className="px-5 py-2.5 mb-2 bg-[#f2f2f2] w-full rounded-lg outline-none text-[16px] flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full outline-none"
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
            text="Login"
            className="w-full rounded-lg"
            onClick={() => console.log("Login clicked")}
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
