import { useEffect, useState } from "react";
import { useTimeline } from "../../hook/useTimeline";
import type { TimelineType } from "../../@types/timeline.type";
import { SectionName } from "../../UI/Live Page/SectionName";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";
import { MapPin } from "lucide-react";

export const Timeline = () => {
  const { getTimeline } = useTimeline();
  const { accentColor, textColor } = useSelector(
    (store: RootState) => store.memorial,
  );
  const [timeline, setTimeline] = useState<TimelineType>({} as TimelineType);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTimeline();
      setTimeline(response);
    };
    fetchData();
  }, []);

  return (
    <>
      {timeline.isActive && (
        <>
          <SectionName name={timeline.heading} />
          <div>
            {timeline.timeline?.map((item) => {
              return (
                <div key={item._id} className="pb-10 flex items-start gap-7.5">
                  <div className="flex flex-col">
                    <h2
                      className="mb-2 font-[Spectral] text-[22px]"
                      style={{ color: accentColor }}
                    >
                      {item.year || "N/A"}
                    </h2>
                    <p
                      className="font-[Poppins] text-[16px]"
                      style={{ color: textColor }}
                    >
                      {item.month || "N/A"} {item.day || "N/A"} <sup>th</sup>
                    </p>
                  </div>
                  <div
                    className="mt-2 w-5 h-5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                  <div className="flex flex-col font-[Poppins]">
                    <h5
                      className="mb-2 text-[22px]"
                      style={{ color: accentColor }}
                    >
                      {item.headline}
                    </h5>
                    <div
                      className="flex items-center gap-1 text-[16px]"
                      style={{ color: textColor }}
                    >
                      <span>
                        <MapPin size={18} strokeWidth={1.5} />
                      </span>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
