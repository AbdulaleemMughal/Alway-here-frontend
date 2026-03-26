import { useSelector } from "react-redux";
import { Button } from "../UI/Button";
import type { RootState } from "../store/appStore";
import { TemplateModal } from "../UI/Modals/TemplateModal";
import { useEffect, useState } from "react";
import { MemorialCard } from "../components/MemorialCard";
import { useMemorial } from "../hook/useMemorial";
import type { MemorialType } from "../@types/memorial.type";
import { Loader } from "lucide-react";

const Account = () => {
  const loggedInUser = useSelector((store: RootState) => store.user.user);
  const { getAllMemorials, deleteMemorial } = useMemorial();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [allMemorials, setAllMemorials] = useState<MemorialType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchMemorials = async () => {
      const response = await getAllMemorials();
      setAllMemorials(response);
      setLoading(false);
    };
    fetchMemorials();
  }, []);

  const handleDeleteMemorial = async (id: string) => {
    await deleteMemorial(id);
    await getAllMemorials().then((response) => {
      setAllMemorials(response);
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size={60} className="animate-spin" color="#7454a9" />
      </div>
    );
  }

  return (
    <>
      <div className="p-17 flex flex-col items-center max-md:px-6 max-md:py-10">
        <h1 className="mb-2 font-[Spectral] text-(--primary-color) tracking-wide font-medium text-[40px] max-lg:text-[28px]">
          Welcome {loggedInUser?.name}!
        </h1>
        <div className="w-17.5 h-0.5 bg-(--primary-color)"></div>
        {allMemorials.length === 0 && (
          <div className="mt-12 font-[Poppins] flex items-center flex-col">
            <h5 className="mb-2 text-(--primary-color) text-[20px] font-medium">
              Create Your first memorial Page
            </h5>
            <p className="text-center text-[16px] text-(--secondary-color) mb-4 max-lg:text-[14px]">
              Pick a design and start customizing your Memorial website. <br />
              <br /> You can customize your page details, your text, colors,
              images, etc. <br />
              It's very easy to manipulate and only takes 5 mins to build!
            </p>
            <Button text="Start Now" onClick={() => setOpenModal(true)} />
          </div>
        )}
        <div
          className="mt-5 grid gap-6 w-full justify-center 
                grid-cols-[repeat(auto-fit,minmax(320px,360px))]"
        >
          {allMemorials.map((memorial) => {
            return (
              <MemorialCard
                key={memorial._id}
                data={memorial}
                onDelete={handleDeleteMemorial}
              />
            );
          })}
        </div>
      </div>
      <TemplateModal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default Account;
