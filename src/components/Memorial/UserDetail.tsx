import { CalendarDays, Image, MapPin } from "lucide-react";
import { Button } from "../../UI/Memorial/Button";
import { Input } from "../../UI/Memorial/Input";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { MemorialType } from "../../@types/memorial.type";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";
import { useMemorial } from "../../hook/useMemorial";
import React, { useEffect, useState } from "react";

interface UserDetailProps {
  data: MemorialType;
  setData: React.Dispatch<React.SetStateAction<MemorialType>>;
}

export const UserDetail = ({ data, setData }: UserDetailProps) => {
  if (!data || !data.userDetail) return null;
  const { updateMemorial } = useMemorial();
  const [debouncedData, setDebouncedData] = useState<MemorialType>(data);

  const fontWeight = useSelector(
    (store: RootState) => store.memorial.fontWeight,
  );
  const textColor = useSelector((store: RootState) => store.memorial.textColor);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedData(data);
    }, 500);

    return () => clearTimeout(timer);
  }, [data]);

  useEffect(() => {
    if (!debouncedData) return;

    updateMemorial(debouncedData);
  }, [debouncedData]);

  const handleDataChange = (field: string, value: string) => {
    setData((prev) => ({
      ...prev,
      userDetail: {
        ...prev.userDetail,
        [field]: value,
      },
    }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex items-end gap-16 max-lg:flex-col max-lg:items-center max-lg:gap-10">
        <div className="relative bg-white h-75 w-75 flex justify-center items-center max-sm:w-70 max-sm:h-70">
          <img
            className="h-72.5 w-72.5 object-cover shadow-(--shadow-sm) max-sm:w-67.5 max-sm:h-67.5"
            src={data.userDetail.profileImage}
          />
          <div className="absolute bottom-0 right-0 p-3">
            <Button
              text="Change Image"
              onClick={() => {}}
              startIcon={<Image size={16} strokeWidth={1} />}
            />
          </div>
        </div>
        <div className="flex flex-col max-sm:px-5">
          <div className="flex items-center gap-5 max-sm:flex-col">
            <Input
              type="text"
              value={data.userDetail.firstName}
              className="w-41.75 max-sm:w-full"
              onChange={(e) => handleDataChange("firstName", e.target.value)}
            />
            <Input
              type="text"
              value={data.userDetail.middleName}
              className="w-41.75 max-sm:w-full"
              onChange={(e) => handleDataChange("middleName", e.target.value)}
            />
            <Input
              type="text"
              value={data.userDetail.lastName}
              className="w-41.75 max-sm:w-full"
              onChange={(e) => handleDataChange("lastName", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 mt-4 max-sm:w-full max-sm:flex-col">
            <span className="max-sm:hidden">
              <CalendarDays size={22} strokeWidth={1.5} />
            </span>
            <DatePicker
              label="Date of Birth"
              className="max-sm:w-full"
              value={
                data.userDetail.dateOfBirth
                  ? dayjs(data.userDetail.dateOfBirth)
                  : null
              }
              onChange={(value) =>
                handleDataChange("dateOfBirth", value?.toISOString() || "")
              }
            />
            <span className="max-sm:hidden">-</span>
            <DatePicker
              label="Date of Passing"
              className="max-sm:w-full"
              value={
                data.userDetail.dateOfExpiry
                  ? dayjs(data.userDetail.dateOfExpiry)
                  : null
              }
              onChange={(value) =>
                handleDataChange("dateOfExpiry", value?.toISOString() || "")
              }
            />
          </div>
          <div className="flex items-center gap-2 mt-2 max-sm:w-full">
            <span>
              <MapPin />
            </span>
            <input
              type="text"
              style={{
                fontWeight: fontWeight,
                color: textColor,
              }}
              className="py-1.5 px-3 w-full border border-gray-300 text-[16px] outline-none font-[Poppins] max-sm:text-[14px]"
              placeholder="Location"
              value={data.userDetail.location}
              onChange={(e) => handleDataChange("location", e.target.value)}
            />
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};
