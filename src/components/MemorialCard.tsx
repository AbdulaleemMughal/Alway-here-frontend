import { Eye, Link, SquarePen, Trash } from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import type { MemorialType } from "../@types/memorial.type";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface MemorialCardProps {
  data: MemorialType;
  onDelete?: (id: string) => void;
}

export const MemorialCard = ({ data, onDelete }: MemorialCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="py-4 px-5 flex flex-col items-center border border-(--primary-color) rounded-lg shadow-xl w-full max-w-90 hover:shadow-2xl">
      {" "}
      <div className="flex justify-between items-center w-full">
        <div>
          <button
            onClick={() => navigate(`/dashboard/${data._id}`)}
            className="py-1.25 px-2 rounded-md shadow-sm text-[15px] cursor-pointer font-[Poppins] text-(--secondary-color)"
          >
            Dashboard
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Tooltip
            title="Edit"
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
            <button
              className="py-1.5 px-1.25 rounded-md shadow-sm cursor-pointer"
              onClick={() => {
                const url = `${window.location.origin}/memorial/${data._id}`;
                window.open(url, "_blank");
              }}
            >
              <SquarePen size={18} strokeWidth={1} />
            </button>
          </Tooltip>
          <Tooltip
            title="Delete"
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
            <button
              className="py-1.5 px-1.25 rounded-md shadow-sm cursor-pointer"
              onClick={() => onDelete && onDelete(data._id)}
            >
              <Trash size={18} strokeWidth={1} />
            </button>
          </Tooltip>
        </div>
      </div>
      <div className="w-40 h-40 rounded-full overflow-hidden mt-4 bg-white flex items-center justify-center shadow-xl">
        <img
          src={data.userDetail.profileImage}
          className="w-35 h-35 rounded-full"
        />
      </div>
      <div className="flex items-center justify-between gap-3 w-full mt-12">
        <h3 className="font-[Poppins] text-[20px] text-(--primary-color)">
          {data.userDetail.firstName} {data.userDetail.middleName}{" "}
          {data.userDetail.lastName}
        </h3>
        <p className="bg-[#f5f5f5] text-[13px] font-[Poppins] text-(--secondary-color) px-2 py-1 rounded-md shadow-md">
          {data.isActive ? "Active" : "Inactive"}
        </p>
      </div>
      <div className="mt-8 flex items-center w-full gap-3">
        <button
          onClick={() => {
            window.open(`${window.location.origin}/live/${data._id}`, "_blank");
          }}
          className="p-1.25 flex items-center justify-center rounded-sm gap-2 font-[Poppins] text-[16px] border border-[#cccccc] w-1/2 cursor-pointer transition-all duration-150 hover:bg-(--primary-color) hover:text-white"
        >
          <Eye size={22} strokeWidth={1.5} />
          View
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(
              `${window.location.origin}/live/${data._id}`,
            );
            toast.success("Link copied to clipboard!");
          }}
          className="p-1.25 flex items-center justify-center rounded-sm gap-2 font-[Poppins] text-[16px] border border-[#cccccc] w-1/2 cursor-pointer transition-all duration-150 hover:bg-(--primary-color) hover:text-white"
        >
          <Link size={22} strokeWidth={1.5} />
          Copy Link
        </button>
      </div>
    </div>
  );
};
