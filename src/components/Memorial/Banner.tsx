import { ArrowLeft, Image, SlidersHorizontal } from "lucide-react";
import { Button } from "../../UI/Memorial/Button";
import { useState } from "react";
import { PageSettingDrawer } from "../../UI/Memorial/PageSettingDrawer";
import { useNavigate, useParams } from "react-router-dom";
import type { MemorialType } from "../../@types/memorial.type";

interface BannerProps {
  data: MemorialType;
}

export const Banner = ({ data }: BannerProps) => {
  const navigate = useNavigate();
  const { memorialId } = useParams();
  const [openDrawer, setOpenDrawer] = useState<boolean>(true);

  return (
    <>
      <div className="relative h-100 w-full max-lg:h-60">
        <img
          className="h-full w-full object-cover "
          src={data?.userDetail?.coverImage}
        />
        <div className="absolute p-5 top-0 left-0 w-full h-full flex flex-col justify-between items-start max-lg:flex-row">
          <div className="flex items-center gap-5">
            <Button
              onClick={() => setOpenDrawer(true)}
              text="Page Setting"
              startIcon={<SlidersHorizontal size={14} />}
            />
            <Button
              onClick={() => navigate(`/dashboard/${memorialId}`)}
              text="Back to Dashboard"
              startIcon={<ArrowLeft size={14} />}
              className="max-lg:hidden"
            />
          </div>
          <div className="flex ml-auto">
            <Button
              onClick={() => {}}
              text="Change Image"
              startIcon={<Image size={16} strokeWidth={1} />}
            />
          </div>
        </div>
      </div>
      <PageSettingDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};
