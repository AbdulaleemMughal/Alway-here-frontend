import {
  ChartNoAxesColumn,
  ExternalLink,
  Info,
  QrCode,
  Settings,
  Trash,
} from "lucide-react";
import "../../style/dashboard.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { MemorialType } from "../../@types/memorial.type";
import { useMemorial } from "../../hook/useMemorial";
import { handleScroll } from "../../utils/pageScroll";
import { QrCodeModal } from "../../UI/Modals/QrCodeModal";
import { useState } from "react";

interface HeaderProps {
  memorialData: MemorialType;
}

export const Header = ({ memorialData }: HeaderProps) => {
  const { memorialId } = useParams();
  const navigate = useNavigate();
  const { deleteMemorial } = useMemorial();
  const [openQrModal, setOpenQrMOdal] = useState<boolean>(false);

  const handleDeletePage = async () => {
    if (memorialId) {
      await deleteMemorial(memorialId).then(() => {
        navigate("/account");
      });
    }
  };

  return (
    <>
      <div className="my-5 mx-auto max-w-7xl bg-white">
        <div className="p-7 flex items-center gap-8 justify-between overflow-x-auto whitespace-nowrap flex-nowrap custom-scrollbar">
          <div onClick={() => handleScroll("dashboard")}>
            <div className="flex items-center gap-3 cursor-pointer shrink-0">
              <Info size={18} strokeWidth={1.5} color="#a07ae2" />
              <p className="text-[16px] font-[Poppins] text-(--secondary-color)">
                Dashboard
              </p>
            </div>
          </div>

          <div onClick={() => handleScroll("statistics")}>
            <div className="flex items-center gap-3 cursor-pointer shrink-0">
              <ChartNoAxesColumn size={18} strokeWidth={1.5} color="#a07ae2" />
              <p className="text-[16px] font-[Poppins] text-(--secondary-color)">
                Statistics
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-3 cursor-pointer shrink-0"
            onClick={handleDeletePage}
          >
            <Trash size={18} strokeWidth={1.5} color="#a07ae2" />
            <p className="text-[16px] font-[Poppins] text-(--secondary-color)">
              Delete Page
            </p>
          </div>

          <div
            className="flex items-center gap-3 cursor-pointer shrink-0"
            onClick={() => setOpenQrMOdal(true)}
          >
            <QrCode size={18} strokeWidth={1.5} color="#a07ae2" />
            <p className="text-[16px] font-[Poppins] text-(--secondary-color)">
              Download QR Code
            </p>
          </div>

          <Link to={`/memorial/${memorialId}`} target="_blank">
            <div className="flex items-center gap-3 cursor-pointer shrink-0">
              <Settings size={18} strokeWidth={1.5} color="#a07ae2" />
              <p className="text-[16px] font-[Poppins] text-(--secondary-color)">
                Edit Page
              </p>
            </div>
          </Link>
          <Link
            to={`/live/${memorialData?._id}`}
            target="_blank"
            className="flex items-center gap-3 cursor-pointer shrink-0"
          >
            <ExternalLink size={18} strokeWidth={1.5} color="#a07ae2" />
            <p className="text-[16px] font-[Poppins] text-(--secondary-color)">
              View Page
            </p>
          </Link>
        </div>
      </div>
      <QrCodeModal
        link={`${window.location.origin}/live/${memorialId}`}
        open={openQrModal}
        setOpen={setOpenQrMOdal}
      />
    </>
  );
};
