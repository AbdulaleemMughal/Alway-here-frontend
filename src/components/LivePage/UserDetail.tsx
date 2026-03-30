import { useSelector } from "react-redux";
import type { MemorialType } from "../../@types/memorial.type";
import type { RootState } from "../../store/appStore";
import dayjs from "dayjs";
import { CalendarDays, MapPin } from "lucide-react";

interface UserDetailProps {
  data: MemorialType;
}

export const UserDetail = ({ data }: UserDetailProps) => {
  const { textColor, accentColor } = useSelector(
    (store: RootState) => store.memorial,
  );

  return (
    <>
      <div className="relative h-100 w-full max-lg:h-60">
        <img
          className="h-full w-full object-cover "
          src={data?.userDetail?.coverImage}
        />
      </div>
      <div className="relative bottom-16 flex justify-center">
        <div className="flex items-end gap-20 max-md:flex-col max-md:items-center max-md:gap-5">
          <div className=" bg-white h-75 w-75 flex justify-center items-center max-md:w-70 max-md:h-70">
            <img
              className="h-72.5 w-72.5 object-cover shadow-(--shadow-sm) max-md:w-67.5 max-md:h-67.5"
              src={data.userDetail?.profileImage}
            />
          </div>
          <div className="flex flex-col max-md:items-center">
            <h1
              className="mb-5 font-[Spectral] text-5xl max-md:text-4xl"
              style={{
                color: textColor,
              }}
            >
              {data.userDetail?.firstName} {data.userDetail?.middleName}{" "}
              {data.userDetail?.lastName}
            </h1>
            <div className="mb-2.5 flex gap-2.5 items-center">
              <span>
                <CalendarDays size={22} strokeWidth={1.5} color={accentColor} />
              </span>
              <p
                className="font-[Poppins] text-[18px] font-light max-md:text-sm"
                style={{
                  color: textColor,
                }}
              >
                {data?.userDetail?.dateOfBirth
                  ? dayjs(data.userDetail?.dateOfBirth).format("DD MMM YYYY")
                  : "N/A"}{" "}
                •{" "}
                {data?.userDetail?.dateOfExpiry
                  ? dayjs(data.userDetail?.dateOfExpiry).format("DD MMM YYYY")
                  : "N/A"}
              </p>
            </div>
            <div className="flex gap-2.5 items-center">
              <span>
                <MapPin size={22} strokeWidth={1.5} color={accentColor} />
              </span>
              <p
                className="font-[Poppins] text-[18px] font-light max-md:text-sm"
                style={{
                  color: textColor,
                }}
              >
                {data.userDetail?.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
