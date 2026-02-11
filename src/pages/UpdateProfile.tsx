import { Lock } from "lucide-react";
import { Input } from "../UI/Input";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/appStore";
import { Button } from "../UI/Button";

type UpdateUserType = {
  _id: string;
  oldPassword?: string;
  newPassword?: string;
  email: string;
  name: string;
};

export const UpdateProfile = () => {
  const loggedInUser = useSelector((store: RootState) => store.user.user);
  const [userData, setUserData] = useState<UpdateUserType | null>(null);

  useEffect(() => {
    if (loggedInUser) {
      setUserData(loggedInUser as UpdateUserType);
    }
  }, [loggedInUser]);

  return (
    <>
      <div className="flex items-center justify-center h-[calc(100vh-11vh)] bg-(--background-color) max-sm:px-5">
        <div className="w-150 bg-white shadow-2xl p-7.5 rounded-xl max-md:p-5">
          <div className="flex items-center gap-5">
            <Lock color="#7454a9" size={20} />
            <h1 className="font-[Spectral] text-(--primary-color) text-[24px]">
              Change Your Info
            </h1>
          </div>
          <p className="my-4 text-(--secondary-color) text-[14px] font-[Poppins]">
            Please enter your new password and confirm it.
          </p>
          <form className="mt-7">
            <div className="flex flex-col">
              <div>
                <label
                  htmlFor="old_passowrd"
                  className="text-[14px] font-[Poppins] text-(--secondary-color)"
                >
                  Old Password:
                </label>
                <Input
                  id="old_password"
                  type="password"
                  value={userData?.oldPassword as string}
                  onChange={() => {}}
                />
              </div>
              <div>
                <label
                  htmlFor="new_passowrd"
                  className="text-[14px] font-[Poppins] text-(--secondary-color)"
                >
                  New Password:
                </label>
                <Input
                  id="new_password"
                  type="password"
                  value={userData?.newPassword as string}
                  onChange={() => {}}
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="text-[14px] font-[Poppins] text-(--secondary-color)"
                >
                  User Name:
                </label>
                <Input
                  id="username"
                  type="text"
                  value={userData?.name as string}
                  onChange={() => {}}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-[14px] font-[Poppins] text-(--secondary-color)"
                >
                  Email:
                </label>
                <Input
                  id="email"
                  type="email"
                  value={userData?.email as string}
                  onChange={() => {}}
                />
              </div>
            </div>
            <Button
              type="submit"
              text="Update Form"
              onClick={() => {}}
              className="mt-5 w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
};
