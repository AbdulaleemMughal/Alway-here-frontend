import { useEffect, useState, useRef } from "react";
import type { TimelinePayload, TimelineType } from "../../@types/timeline.type";
import { useTimeline } from "../../hook/useTimeline";
import { InputAndSwitch } from "../../shared/InputAndSwitch";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";
import { Loader2, MapPin, Plus, Trash } from "lucide-react";
import { days, months, years } from "../../utils/timeline";
import { Button } from "../../UI/Memorial/Button";

export const Timeline = () => {
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { getTimeline, updateTimeline, deleteTimeline, createTimeline } =
    useTimeline();
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

  const handleDebouncedChange = (
    value: string,
    name: keyof TimelinePayload,
    timelineId: string,
  ) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      handleDataChange(value, name, timelineId);
    }, 500);
  };

  const handleDataChange = async (
    defaultValue: number | string,
    name: keyof TimelinePayload,
    timelineId: string,
  ) => {
    const value: TimelinePayload = {
      [name]: defaultValue,
    };

    const response = await updateTimeline(value, timelineId);
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
            <div className="flex flex-col">
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
                          value={timeline.year}
                          onChange={(e) =>
                            handleDataChange(
                              e.target.value,
                              "year",
                              timeline._id,
                            )
                          }
                        >
                          <option value="">Year</option>
                          {years.map((year) => (
                            <option value={year.value}>{year.value}</option>
                          ))}
                        </select>
                        <select
                          style={{
                            color: accentColor,
                          }}
                          className="px-3 py-1.5 text-[14px] font-medium font-[Spectral] bg-white border border-gray-300"
                          value={timeline.month}
                          onChange={(e) =>
                            handleDataChange(
                              e.target.value,
                              "month",
                              timeline._id,
                            )
                          }
                        >
                          <option value="">Month</option>
                          {months.map((month) => (
                            <option value={month.value}>{month.value}</option>
                          ))}
                        </select>
                        <select
                          style={{
                            color: accentColor,
                          }}
                          className="px-3 py-1.5 text-[14px] font-medium font-[Spectral] bg-white border border-gray-300"
                          value={timeline.day}
                          onChange={(e) =>
                            handleDataChange(
                              e.target.value,
                              "day",
                              timeline._id,
                            )
                          }
                        >
                          <option value="">Day</option>
                          {days.map((day) => (
                            <option value={day.value}>{day.value}</option>
                          ))}
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
                          onChange={(e) => {
                            const value = e.target.value;

                            setTimelineData((prev) => ({
                              ...prev,
                              timeline: prev.timeline.map((t) =>
                                t._id === timeline._id
                                  ? { ...t, headline: value }
                                  : t,
                              ),
                            }));

                            handleDebouncedChange(
                              value,
                              "headline",
                              timeline._id,
                            );
                          }}
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
                            onChange={(e) => {
                              const value = e.target.value;

                              setTimelineData((prev) => ({
                                ...prev,
                                timeline: prev.timeline.map((t) =>
                                  t._id === timeline._id
                                    ? { ...t, description: value }
                                    : t,
                                ),
                              }));

                              handleDebouncedChange(
                                value,
                                "description",
                                timeline._id,
                              );
                            }}
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
              <div>
                <Button
                  text="Add More Timeline"
                  className="text-[16px] mt-10 px-6 py-2.5"
                  onClick={async () => {
                    const response = await createTimeline();
                    setTimelineData(response);
                  }}
                  startIcon={<Plus />}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
