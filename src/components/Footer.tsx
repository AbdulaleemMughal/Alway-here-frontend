import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../store/appStore";

const data = [
  {
    id: 1,
    title: "Usefull Information",
    childrens: [
      {
        id: 2,
        text: "What is Digital Memorial?",
        path: "memorialsite",
      },
      {
        id: 3,
        text: "How to tell their story?",
        path: "write-obituary",
      },
      {
        id: 4,
        text: "Dealing with Loss",
        path: "dealing-grief",
      },
      {
        id: 5,
        text: "Memorial Flowers - Best Choices",
        path: "memorial-flowers",
      },
    ],
  },
  {
    id: 6,
    title: "Need Some Help?",
    childrens: [
      {
        id: 7,
        text: "F.A.Q",
        path: "faq",
      },
      {
        id: 8,
        text: "Our Templates",
        path: "design",
      },
      {
        id: 9,
        text: "How It Works",
        path: "about",
      },
      {
        id: 10,
        text: "Contact Us",
        path: "contact",
      },
    ],
  },
  {
    id: 11,
    title: "Your Account",
    childrens: [
      {
        id: 12,
        text: "Create New Account",
        path: "signup",
      },
      {
        id: 13,
        text: "Login",
        path: "login",
      },
      {
        id: 14,
        text: "Password Reset",
        path: "forget-password",
      },
    ],
  },
];

export const Footer = () => {
  const isLoggedInUser = useSelector((store: RootState) => store.user.user);

  return (
    <footer className="bg-(--primary-color) py-20 px-56.75 max-2xl:px-40 max-xl:px-30 max-lg:px-10 max-sm:px-6">
      <div className="grid grid-cols-12 pb-10 border-b border-purple-400">
        {isLoggedInUser === null
          ? data.map((section) => {
              return (
                <div
                  className="col-span-4 max-lg:col-span-6 max-sm:col-span-12 max-lg:mt-5"
                  key={section.id}
                >
                  <div className="mb-6.25">
                    <h1 className="mb-3 text-[24px] text-(--footer-text) font-[Poppins]">
                      {section.title}
                    </h1>
                    <div className="h-0.5 w-12.5 bg-purple-400"></div>
                  </div>
                  <ul className="flex flex-col">
                    {section.childrens.map((item) => (
                      <li
                        key={item.id}
                        className="mb-3.5 font-light text-[16px] font-[Poppins] text-(--footer-text)"
                      >
                        <Link to={item.path}>{item.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })
          : data.slice(0, 2).map((section) => {
              return (
                <div
                  className="col-span-4 max-lg:col-span-6 max-sm:col-span-12 max-lg:mt-5"
                  key={section.id}
                >
                  <div className="mb-6.25">
                    <h1 className="mb-3 text-[24px] text-(--footer-text) font-[Poppins]">
                      {section.title}
                    </h1>
                    <div className="h-0.5 w-12.5 bg-purple-400"></div>
                  </div>
                  <ul className="flex flex-col">
                    {section.childrens.map((item) => (
                      <li
                        key={item.id}
                        className="mb-3.5 font-light text-[16px] font-[Poppins] text-(--footer-text)"
                      >
                        <Link to={item.path}>{item.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
        {}
      </div>
      <div className="flex items-center justify-between mt-10">
        <p className="font-[Poppins] text-[16px] text-(--footer-text)">
          © 2024 - Andres Group
        </p>
        <p className="font-[Poppins] text-[16px] text-(--footer-text) flex items-center gap-2">
          Terms of Use{" "}
          <div className="bg-purple-400 w-1.5 h-1.5 rounded-full"></div>
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};
