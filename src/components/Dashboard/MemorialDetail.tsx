import { Tooltip } from "@mui/material";
import { Flag, Info, Lock, Star } from "lucide-react";
import type { MemorialType } from "../../@types/memorial.type";
import { useMemorial } from "../../hook/useMemorial";

interface MemorialDetailProps {
  memorialData: MemorialType;
}

export const MemorialDetail = ({ memorialData }: MemorialDetailProps) => {
  const { updateMemorial } = useMemorial();

  const handleStatus = async (value: string) => {
    const statusisActive = value === "active" ? true : false;

    try {
      await updateMemorial({ isActive: statusisActive } as MemorialType);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="dashboard" className="py-12 px-5 bg-[#f9fafb]">
      <div className="mx-auto max-w-7xl flex justify-around items-center max-lg:flex-col max-lg:gap-10">
        <div className="w-50 h-50 rounded-full overflow-hidden mt-4 bg-white flex items-center justify-center shadow-xl">
          <img
            src={memorialData.userDetail?.profileImage}
            className="w-45 h-45 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-5 max-sm:w-full">
          <div className="flex items-center gap-20 max-sm:gap-5">
            <div className="flex items-center text-(--primary-color) gap-3">
              <Star size={18} strokeWidth={1.5} />
              <p className="text-[20px] font-[Spectral] font-medium">Name:</p>
            </div>
            <div className="flex items-center gap-3">
              <h3 className="font-[Spectral] text-[20px] text-(--secondary-color)">
                {memorialData.userDetail?.firstName}{" "}
                {memorialData.userDetail?.middleName}{" "}
                {memorialData.userDetail?.lastName}
              </h3>
              <Tooltip
                title="You can change this on your Edit Page"
                placement="top"
                arrow
                slotProps={{
                  tooltip: {
                    sx: {
                      fontSize: "16px",
                      fontFamily: "Poppins, sans-serif",
                    },
                  },
                }}
              >
                <Info color="gray" size={18} />
              </Tooltip>
            </div>
          </div>
          <div className="flex items-center gap-17 max-sm:gap-5">
            <div className="flex items-center text-(--primary-color) gap-3">
              <Lock size={18} strokeWidth={1.5} />
              <p className="text-[20px] font-[Spectral] font-medium">
                Privacy:
              </p>
            </div>
            <select className="py-1.5 px-3 bg-white rounded-sm border border-gray-300 outline-none">
              <option>Public</option>
              <option>Password-Protected</option>
            </select>
          </div>
          <div className="flex items-center gap-20 max-sm:gap-5">
            <div className="flex items-center text-(--primary-color) gap-3">
              <Flag size={18} strokeWidth={1.5} />
              <p className="text-[20px] font-[Spectral] font-medium">Status:</p>
            </div>
            <select
              defaultValue={memorialData.isActive ? "active" : "inActive"}
              onChange={(e) => handleStatus(e.target.value)}
              className="py-1.5 px-3 bg-white rounded-sm border border-gray-300 outline-none"
            >
              <option value="active">Active (memorial page is active)</option>
              <option value="inActive">
                Closed (memorial page is inactive)
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};
