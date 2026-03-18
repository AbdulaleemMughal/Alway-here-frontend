import { ChevronDown, UserRound } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { useClickOutside } from "../hook/useClickOutside";

export const UserDropdown = ({ name }: { name: string }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { logOut } = useAuth();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useClickOutside(dropdownRef, () => setShowDropdown(false));

  const handleLogout = async () => {
    await logOut();
  };

  const routes = [
    {
      id: 1,
      name: "Account",
      path: "/account",
    },
    {
      id: 2,
      name: "Update Profile",
      path: "/update_profile",
    },
    {
      id: 3,
      name: "Logout",
      action: handleLogout,
    },
  ];

  return (
    <div
      ref={dropdownRef}
      className="relative ml-7.5 flex items-center gap-1.5 font-medium text-gray-600 font-[Poppins] cursor-pointer py-1 max-xl:ml-4"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <UserRound size={18} />
      <li className="text-[16px] ">{name}</li>
      <ChevronDown size={17} />
      {showDropdown && (
        <div className="absolute py-2 h-fit w-44 bg-white top-10 right-0 rounded-xl shadow-lg font-[Poppins] border border-gray-300 max-lg:top-0 max-lg:left-40">
          {routes.map((route) => {
            return (
              <Link to={route.path as string} key={route.id}>
                {route.path ? (
                  <div className="px-4 py-2 text-(--secondary-color) text-[16px] hover:bg-gray-100">
                    {route.name}
                  </div>
                ) : (
                  <div
                    onClick={() => handleLogout()}
                    className="px-4 py-2 text-(--secondary-color) text-[16px] hover:bg-gray-100"
                  >
                    {route.name}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
