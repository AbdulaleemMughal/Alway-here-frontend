import { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { useTheme } from "../hook/useTheme";
import type { ThemeType } from "../@types/theme.type";
import { ThemeCard } from "../components/ThemeCard";
import { Loader2 } from "lucide-react";

export const Design = () => {
  const { getTheme } = useTheme();
  const [loading, setLoading] = useState<boolean>(true);
  const [themes, setThemes] = useState<ThemeType[]>([]);

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        setLoading(true);
        const data = await getTheme();
        setThemes(data ?? []);
      } catch (err) {
        console.error(err);
        setThemes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchThemes();
  }, []);

  return (
    <>
      <Banner title="Our Designs" desc="Our beautifull designs" />
      <div className="my-30">
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-[36px] font-[Spectral] font-light text-(--primary-color)">
            Modern & Elegant Memorial Websites Design
          </h2>
          <p className="mb-4 text-[16px] font-[Poppins] text-(--secondary-color) text-center">
            Choose a theme for your Memorial website and start customizing it...
            You can change <br /> this anytime later.
          </p>
          <div className="bg-gray-300 w-25 h-0.5"></div>
          {loading ? (
            <div className="my-10 flex justify-center items-center flex-col">
              <Loader2 color="#7454a9" className="animate-spin" size={35} />
              <p className="text-[#7454a9] font-[Poppins] font-medium text-[18px]">
                Fetching Themes
              </p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-12 gap-5">
              {themes.map((theme) => {
                return <ThemeCard key={theme._id} data={theme} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
