import { useSelector } from "react-redux";
import { Input } from "../UI/Memorial/Input";
import type { RootState } from "../store/appStore";
import { ColorSwitch } from "../UI/Memorial/ColorSwitch";
import { useMemo, useRef, useEffect } from "react";
import { debounce } from "lodash";

interface InputAndSwitchProps<
  TData extends { heading: string; isActive: boolean },
  TPayload extends { heading?: string; isActive?: boolean },
> {
  data: TData;
  setData: React.Dispatch<React.SetStateAction<TData>>;
  updateSection: (payload: TPayload) => Promise<TData>;
}

export const InputAndSwitch = <
  TData extends { heading: string; isActive: boolean },
  TPayload extends { heading?: string; isActive?: boolean },
>({
  data,
  setData,
  updateSection,
}: InputAndSwitchProps<TData, TPayload>) => {
  const pageColor = useSelector(
    (store: RootState) => store.memorial.accentColor,
  );

  const updateSectionRef = useRef(updateSection);
  const setDataRef = useRef(setData);

  useEffect(() => {
    updateSectionRef.current = updateSection;
    setDataRef.current = setData;
  }, [updateSection, setData]);

  const debouncedUpdateHeading = useMemo(
    () =>
      debounce(async (value: string) => {
        try {
          const response = await updateSectionRef.current({
            heading: value,
          } as TPayload);
          setDataRef.current(response);
        } catch (err) {
          console.error(err);
        }
      }, 500),
    [], 
  );

  useEffect(() => {
    return () => {
      debouncedUpdateHeading.cancel();
    };
  }, [debouncedUpdateHeading]);

  const handleIsActive = async (value: boolean) => {
    try {
      const response = await updateSection({ isActive: value } as TPayload);
      setData(response);
    } catch (err) {
      console.error(err);
    }
  };

  const handleHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setData((prev) => ({ ...prev, heading: newValue }));

    debouncedUpdateHeading(newValue);
  };

  return (
    <div className="pt-30 pb-12.5 flex items-center justify-between">
      <div className="flex flex-col">
        <Input
          className="w-60 text-[32px] mb-2.5"
          value={data?.heading}
          onChange={handleHeadingChange} 
        />
        <div
          className="w-15 h-0.75"
          style={{ backgroundColor: pageColor }}
        ></div>
      </div>
      <div className="flex items-center gap-2.5">
        <ColorSwitch
          value={data?.isActive}
          onChange={(e) => {
            handleIsActive(e.target.checked);
          }}
        />
        <p
          className="text-[16px] font-[Poppins] font-medium"
          style={{ color: pageColor }}
        >
          Enable
        </p>
      </div>
    </div>
  );
};
