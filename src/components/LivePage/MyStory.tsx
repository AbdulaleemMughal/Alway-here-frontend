import { useEffect, useState } from "react";
import { useObituary } from "../../hook/useObituary";
import { SectionName } from "../../UI/Live Page/SectionName";
import type { ObituaryType } from "../../@types/obituary.type";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";

export const MyStory = () => {
  const { getObituary } = useObituary();
  const { textColor } = useSelector((store: RootState) => store.memorial);
  const [data, setData] = useState<ObituaryType>({} as ObituaryType);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getObituary();
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <>
      {data.isActive && (
        <div>
          <SectionName name={data.heading} />
          <div
            style={{
              color: textColor,
            }}
            className="raw-html font-[Poppins]"
            dangerouslySetInnerHTML={{ __html: data.message }}
          ></div>
        </div>
      )}
    </>
  );
};
