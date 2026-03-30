import { ArrowLeft, Image, SlidersHorizontal } from "lucide-react";
import { Button } from "../../UI/Memorial/Button";
import { useRef, useState } from "react";
import { PageSettingDrawer } from "../../UI/Memorial/PageSettingDrawer";
import { useNavigate, useParams } from "react-router-dom";
import type { MemorialType } from "../../@types/memorial.type";
import { useMemorial } from "../../hook/useMemorial";

interface BannerProps {
  data: MemorialType;
}

export const Banner = ({ data }: BannerProps) => {
  const coverImageRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { memorialId } = useParams();
  const { coverImage, updateMemorialImage } = useMemorial();
  const [openDrawer, setOpenDrawer] = useState<boolean>(true);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("coverImage", file);
      updateMemorialImage(formData);
    }
    e.target.value = "";
  };

  return (
    <>
      <div className="relative h-100 w-full max-lg:h-60">
        <img
          className="h-full w-full object-cover "
          src={coverImage ? coverImage : data.userDetail.coverImage}
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
          <div className="flex ml-auto z-999999">
            <Button
              text="Change Image"
              onClick={() => {
                if (coverImageRef.current) {
                  coverImageRef.current.click();
                }
              }}
              startIcon={<Image size={16} strokeWidth={1} />}
            />
            <input
              type="file"
              accept="image/*"
              ref={coverImageRef}
              className="hidden"
              onChange={(e) => {
                handleImageChange(e);
              }}
            />
          </div>
        </div>
      </div>
      <PageSettingDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};
