import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { Link } from "react-router-dom";
import type { UserType } from "../@types/user.type";
import { useAuth } from "../hook/useAuth";

export const Signup = () => {
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserType>({
    name: "",
    email: "",
    password: "",
  });

  const handleDataChange = (field: keyof UserType, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(userData);
      setUserData({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-[calc(100vh-11vh)] bg-(--background-color) max-sm:px-5">
        <form
          className="w-150 flex flex-col items-center bg-white shadow-2xl py-11.25 px-13.75 rounded-xl max-md:p-5"
          onSubmit={handleSignUp}
        >
          <h1 className="text-[32px] text-(--primary-color) font-[Spectral] mb-7.5">
            SignUp
          </h1>
          <Input
            type="text"
            placeholder="Enter Name"
            value={userData.name}
            onChange={(e) => handleDataChange("name", e.target.value)}
          />
          <Input
            type="email"
            placeholder="Enter Email"
            value={userData.email}
            onChange={(e) => handleDataChange("email", e.target.value)}
          />
          <div className="px-5 py-2.5 mb-5 bg-[#f2f2f2] w-full rounded-lg outline-none text-[16px] flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full outline-none"
              value={userData.password}
              onChange={(e) => handleDataChange("password", e.target.value)}
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
            disable={loading}
            text="Register"
            className="w-full rounded-lg"
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
