import { useEffect, useState } from "react";
import type { TimelinePayload, TimelineType } from "../../@types/timeline.type";
import { useTimeline } from "../../hook/useTimeline";
import { InputAndSwitch } from "../../shared/InputAndSwitch";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";
import { Loader2, MapPin, Trash } from "lucide-react";

export const Timeline = () => {
  const { getTimeline, updateTimeline, deleteTimeline } = useTimeline();
  const [timelineData, setTimelineData] = useState<TimelineType>(
    {} as TimelineType,
  );
  const [loading, setLoading] = useState<string>("");
  const { accentColor, textColor } = useSelector(
    (store: RootState) => store.memorial,
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTimeline();
      setTimelineData(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    setLoading(id);
    const response = await deleteTimeline(id).finally(() => {
      setLoading("");
    });
    setTimelineData(response);
  };

  return (
    <div>
      <InputAndSwitch<TimelineType, TimelinePayload>
        data={timelineData}
        setData={setTimelineData}
        updateSection={updateTimeline}
      />
      <div>
        <div className="flex items-start gap-4">
          <div
            style={{
              backgroundColor: accentColor,
            }}
            className="hidden max-md:block mt-1 h-5 w-5 rounded-full"
          ></div>
          {timelineData.isActive && (
            <div className="flex flex-col gap-12">
              {timelineData.timeline.map((timeline) => {
                return (
                  <div
                    key={timeline._id}
                    className="flex items-start gap-7.5 max-md:flex-col max-md:flex-1"
                  >
                    <div className="flex flex-col gap-2 max-md:w-full">
                      <select
                        style={{
                          color: accentColor,
                        }}
                        className="px-3 py-1.5 text-[22px] font-medium font-[Spectral] bg-white border border-gray-300"
                      >
                        <option>Year</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                      </select>
                      <select
                        style={{
                          color: accentColor,
                        }}
                        className="px-3 py-1.5 text-[14px] font-medium font-[Spectral] bg-white border border-gray-300"
                      >
                        <option>Month</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                      </select>
                      <select
                        style={{
                          color: accentColor,
                        }}
                        className="px-3 py-1.5 text-[14px] font-medium font-[Spectral] bg-white border border-gray-300"
                      >
                        <option>Day</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                      </select>
                    </div>
                    <div
                      style={{
                        backgroundColor: accentColor,
                      }}
                      className="mt-0.5 h-5 w-5 rounded-full max-md:hidden"
                    ></div>
                    <div className="flex flex-col gap-2 w-100 max-md:w-full">
                      <input
                        type="text"
                        style={{
                          color: accentColor,
                        }}
                        className="w-full bg-transparent px-2.5 py-1.25 text-[22px] font-[Poppins] border-2 border-dashed border-gray-300 outline-none"
                        placeholder="Headline"
                        value={timeline.headline}
                      />
                      <div className="w-full flex items-center gap-2">
                        <span>
                          <MapPin
                            size={19}
                            strokeWidth={1.5}
                            color={textColor}
                          />
                        </span>
                        <input
                          type="text"
                          style={{
                            color: textColor,
                          }}
                          className="flex-1 bg-transparent px-2.5 py-1.25 text-[16px] font-[Poppins] border-2 border-dashed border-gray-300 outline-none"
                          placeholder="Description"
                          value={timeline.description}
                        />
                      </div>
                      <button
                        disabled={loading === timeline._id}
                        className={`mt-2 w-12 h-10 flex items-center justify-center rounded-lg ${loading === timeline._id ? "cursor-not-allowed" : "cursor-pointer"}`}
                        style={{
                          backgroundColor: accentColor,
                        }}
                        onClick={() => {
                          handleDelete(timeline._id);
                        }}
                      >
                        {loading === timeline._id ? (
                          <Loader2
                            size={19}
                            strokeWidth={1.5}
                            color={textColor}
                            className="animate-spin"
                          />
                        ) : (
                          <Trash
                            size={19}
                            strokeWidth={1.5}
                            color={textColor}
                          />
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
