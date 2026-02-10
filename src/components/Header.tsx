import { Menu, UserRound } from "lucide-react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { Button } from "../UI/Button";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/appStore";

const navItems = [
  {
    id: 1,
    name: "How It Works",
    path: "/about",
  },
  {
    id: 2,
    name: "Our Template",
    path: "/design",
  },
  {
    id: 3,
    name: "Need Help",
    path: "/contact",
  },
  {
    id: 4,
    name: "Login",
    path: "/login",
    icon: UserRound,
  },
];

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const isLoggedInUser = useSelector((store: RootState) => store.user.user);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, [showDropdown]);

  return (
    <>
      <header className="sticky top-0 bg-white px-60 py-3.5 flex items-center justify-between shadow-sm max-2xl:px-20 max-xl:px-10 max-sm:px-6">
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="h-12 mx-auto my-4 max-xl:h-10 max-xl:my-2 max-md:h-7"
            />
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-1 max-lg:hidden">
            {!isLoggedInUser
              ? navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      to={item.path}
                      key={item.id}
                      className="ml-7.5 flex items-center gap-2 font-medium text-gray-600 font-[Poppins] cursor-pointer hover:border-b-2 hover:border-(var(--primary-color)) py-1 max-xl:ml-4"
                    >
                      {Icon && <Icon size={18} />}
                      <li key={item.id} className="text-[16px] ">
                        {item.name}
                      </li>
                    </Link>
                  );
                })
              : navItems.slice(0, 3).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      to={item.path}
                      key={item.id}
                      className="ml-7.5 flex items-center gap-2 font-medium text-gray-600 font-[Poppins] cursor-pointer hover:border-b-2 hover:border-(var(--primary-color)) py-1 max-xl:ml-4"
                    >
                      {Icon && <Icon size={18} />}
                      <li key={item.id} className="text-[16px] ">
                        {item.name}
                      </li>
                    </Link>
                  );
                })}
            <Button text="Get Started" className="ml-7.5" onClick={() => {}} />
          </ul>
          <span
            className="hidden max-lg:block"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Menu className="text-(--secondary-color)" size={30} />
          </span>
        </div>
      </header>
      {showDropdown && (
        <div
          className={`sticky top-16 bg-white overflow-hidden shadow-md transition-all duration-300 ease-in-out ${
            showDropdown
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="py-5 flex flex-col items-center">
            <ul className="flex flex-col items-center">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} className="my-2">
                    <Link
                      to={item.path}
                      className="flex items-center gap-2 font-medium text-gray-600 font-[Poppins] cursor-pointer hover:border-b-2 hover:border-(--primary-color) py-1"
                    >
                      {Icon && <Icon size={18} />}
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Button
              text="Get Started"
              className="mt-2 w-1/2 max-sm:w-2/3"
              onClick={() => {}}
            />
          </div>
        </div>
      )}
    </>
  );
};
