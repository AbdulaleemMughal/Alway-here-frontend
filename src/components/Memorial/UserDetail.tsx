import { CalendarDays, Image, MapPin } from "lucide-react";
import { Button } from "../../UI/Memorial/Button";
import { Input } from "../../UI/Memorial/Input";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const UserDetail = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex items-end gap-16 max-lg:flex-col max-lg:items-center max-lg:gap-10">
        <div className="relative bg-red-900 h-75 w-75 flex justify-center items-center max-sm:w-70 max-sm:h-70">
          <img
            className="h-72.5 w-72.5 object-cover max-sm:w-67.5 max-sm:h-67.5"
            src="https://alwayshere.fra1.digitaloceanspaces.com/admin_alwayshere--1722321451631_rose-6799477_1920.jpg"
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
              value="Hello"
              className="w-41.75 max-sm:w-full"
              onChange={(e) => {console.log(e.target.value)}}
            />
            <Input
              type="text"
              value="Hello"
              className="w-41.75 max-sm:w-full"
              onChange={(e) => {console.log(e.target.value)}}
            />
            <Input
              type="text"
              value="Hello"
              className="w-41.75 max-sm:w-full"
              onChange={(e) => {console.log(e.target.value)}}
            />
          </div>
          <div className="flex items-center gap-2 mt-4 max-sm:w-full max-sm:flex-col">
            <span className="max-sm:hidden">
              <CalendarDays size={22} strokeWidth={1.5} />
            </span>
            <DatePicker label="Date of Birth" className="max-sm:w-full" />
            <span className="max-sm:hidden">-</span>
            <DatePicker label="Date of Passing" className="max-sm:w-full" />
          </div>
          <div className="flex items-center gap-2 mt-2 max-sm:w-full">
            <span>
              <MapPin />
            </span>
            <input
              type="text"
              className="py-1.5 px-3 w-full border border-gray-300 text-[16px] outline-none font-[Poppins] max-sm:text-[14px]"
              placeholder="Location"
            />
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};
