import { useSelector } from "react-redux";
import type { ThemeType } from "../@types/theme.type";
import { Button } from "../UI/Button";
import type { RootState } from "../store/appStore";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";

interface ThemeCardProps {
  data: ThemeType;
}

export const ThemeCard = ({ data }: ThemeCardProps) => {
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector((store: RootState) => store.user.user);

  const handleMemorial = async (keyword: string) => {
    if (!isUserLoggedIn) {
      alert("Please Login to continue");
      navigate("/login");
    }

    const keywordToSendInApi = keyword.split(",")[0].trim();

    const response = await axiosInstance.post(
      `/api/add-memorial/${keywordToSendInApi}`,
    );
    navigate(`/memorial/${response.data.data._id}`);
  };

  return (
    <div className="group relative col-span-6 max-lg:col-span-12 overflow-hidden">
      <div className="h-90 relative">
        <img
          src={data.thumbnailImage}
          className="h-full w-full object-cover"
          alt={data.themeTitle}
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black/10 backdrop-blur-sm translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <Button
            text="Use this design"
            onClick={() => handleMemorial(data.themeKeywords)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
