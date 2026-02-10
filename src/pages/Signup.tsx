import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center justify-center h-[calc(100vh-11vh)] bg-(--background-color) max-sm:px-5">
        <form className="w-150 flex flex-col items-center bg-white shadow-2xl py-11.25 px-13.75 rounded-xl max-md:p-5">
          <h1 className="text-[32px] text-(--primary-color) font-[Spectral] mb-7.5">
            Login
          </h1>
          <Input placeholder="Enter Name" />
          <Input placeholder="Enter Email" />
          <div className="px-5 py-2.5 mb-5 bg-[#f2f2f2] w-full rounded-lg outline-none text-[16px] flex items-center">
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
          <Button
            type="submit"
            text="Register"
            className="w-full rounded-lg"
            onClick={() => console.log("Login clicked")}
          />
          <Link
            to={"/login"}
            className="text-[16px] font-[Poppins] mt-10 text-(--primary-color) underline"
          >
            BACK TO LOGIN
          </Link>
        </form>
      </div>
    </>
  );
};
