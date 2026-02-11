import { useSelector } from "react-redux";
import { Button } from "../UI/Button";
import type { RootState } from "../store/appStore";
import { TemplateModal } from "../UI/Modals/TemplateModal";
import { useState } from "react";

export const Account = () => {
  const loggedInUser = useSelector((store: RootState) => store.user.user);
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <div className="p-17 flex flex-col items-center">
        <h1 className="mb-2 font-[Spectral] text-(--primary-color) tracking-wide font-medium text-[40px]">
          Welcome {loggedInUser?.name}!
        </h1>
        <div className="w-17.5 h-0.5 bg-(--primary-color)"></div>
        <div className="mt-12 font-[Poppins] flex items-center flex-col">
          <h5 className="mb-2 text-(--primary-color) text-[20px] font-medium">
            Create Your first memorial Page
          </h5>
          <p className="text-center text-[16px] text-(--secondary-color) mb-4">
            Pick a design and start customizing your Memorial website. <br />
            <br /> You can customize your page details, your text, colors,
            images, etc. <br />
            It's very easy to manipulate and only takes 5 mins to build!
          </p>
          <Button text="Start Now" onClick={() => setOpenModal(true)} />
        </div>
      </div>
      <TemplateModal open={openModal} setOpen={setOpenModal} />
    </>
  );
};
