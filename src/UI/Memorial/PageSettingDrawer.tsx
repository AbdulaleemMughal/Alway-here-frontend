import { Box, Collapse, Drawer } from "@mui/material";
import { ChevronDown, Pipette, SquareArrowOutUpRight, X } from "lucide-react";
import { useRef, useState } from "react";
import { colors } from "../../utils/colorArray";
import { Button } from "./Button";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";
import { useMemorial } from "../../hook/useMemorial";
import type { MemorialType } from "../../@types/memorial.type";
import { useClickOutside } from "../../hook/useClickOutside";

const PageColor = () => {
  const colorRef = useRef<HTMLInputElement>(null);
  const { updateMemorial } = useMemorial();

  const handlePageColor = async (color: string) => {
    try {
      await updateMemorial({ accentColor: color } as MemorialType);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center flex-wrap">
      {colors.map((color) => {
        return (
          <div
            key={color}
            className="w-7.5 h-7.5 rounded-full m-1 cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={(e) => {
              e.stopPropagation();
              handlePageColor(color);
            }}
          ></div>
        );
      })}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-7.5 h-7.5 flex items-center justify-center bg-black rounded-full m-1 cursor-pointer"
      >
        <Pipette
          color="white"
          size={18}
          onClick={() => {
            if (colorRef.current) {
              colorRef.current?.click();
            }
          }}
        />
        <input
          ref={colorRef}
          type="color"
          className="hidden"
          onChange={(e) => handlePageColor(e.target.value)}
        />
      </div>
    </div>
  );
};

const BackgroundColor = () => {
  const colorRef = useRef<HTMLInputElement>(null);
  const { updateMemorial } = useMemorial();

  const handleBgColor = async (color: string) => {
    try {
      await updateMemorial({ backgroundColor: color } as MemorialType);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center flex-wrap">
      {colors.map((color) => {
        return (
          <div
            key={color}
            className="w-7.5 h-7.5 rounded-full m-1 cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={(e) => {
              e.stopPropagation();
              handleBgColor(color);
            }}
          ></div>
        );
      })}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-7.5 h-7.5 flex items-center justify-center bg-black rounded-full m-1 cursor-pointer"
      >
        <Pipette
          color="white"
          size={18}
          onClick={() => {
            if (colorRef.current) {
              colorRef.current?.click();
            }
          }}
        />
        <input
          ref={colorRef}
          type="color"
          className="hidden"
          onChange={(e) => handleBgColor(e.target.value)}
        />
      </div>
    </div>
  );
};

const TextColor = () => {
  const colorRef = useRef<HTMLInputElement>(null);
  const { updateMemorial } = useMemorial();

  const handleTextColor = async (color: string) => {
    try {
      await updateMemorial({ textColor: color } as MemorialType);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center flex-wrap">
      {colors.map((color) => {
        return (
          <div
            key={color}
            className="w-7.5 h-7.5 rounded-full m-1 cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={(e) => {
              e.stopPropagation();
              handleTextColor(color);
            }}
          ></div>
        );
      })}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-7.5 h-7.5 flex items-center justify-center bg-black rounded-full m-1 cursor-pointer"
      >
        <Pipette
          color="white"
          size={18}
          onClick={() => {
            if (colorRef.current) {
              colorRef.current?.click();
            }
          }}
        />
        <input
          ref={colorRef}
          type="color"
          className="hidden"
          onChange={(e) => handleTextColor(e.target.value)}
        />
      </div>
    </div>
  );
};

const FontWeight = () => {
  const { updateMemorial } = useMemorial();

  const handleFontSize = async (weight: string) => {
    try {
      await updateMemorial({ fontWeight: weight } as MemorialType);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className="flex items-center gap-5"
      onClick={(e) => e.stopPropagation()}
    >
      <Button
        text="Light"
        className="px-5"
        onClick={() => handleFontSize("light")}
      />
      <Button
        text="Bold"
        className="px-5"
        onClick={() => handleFontSize("bold")}
      />
    </div>
  );
};

const PageSettingData = [
  {
    id: 1,
    title: "Page Color",
    component: PageColor,
    desc: "Select Page Color:",
  },
  {
    id: 2,
    title: "Background Color",
    component: BackgroundColor,
    desc: "Select Bacground Color of your Page:",
  },
  {
    id: 3,
    title: "Text Color",
    component: TextColor,
    desc: "Select Text Color of your Page:",
  },
  {
    id: 4,
    title: "Font Weight",
    component: FontWeight,
    desc: 'Choose a default "weight" for your text:',
  },
];

interface PageSettingDrawerProps {
  open: boolean;
  setOpen: (data: boolean) => void;
}

export const PageSettingDrawer = ({
  open,
  setOpen,
}: PageSettingDrawerProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pageColor = useSelector(
    (store: RootState) => store.memorial.accentColor,
  );

  useClickOutside(dropdownRef, () => setOpenIndex(null));

  return (
    <Drawer
      sx={{ zIndex: 9999999 }}
      open={open}
      anchor="left"
      onClose={() => setOpen(false)}
    >
      <Box sx={{ width: 350, height: "100vh" }}>
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center justify-between">
            <div>
              <h1 className="font-[Spectral] text-[24px] mb-2.5 tracking-tight">
                Page Configurations
              </h1>
              <div
                className="w-15 h-0.5"
                style={{ backgroundColor: pageColor }}
              ></div>
            </div>
            <span className="cursor-pointer" onClick={() => setOpen(false)}>
              <X color="gray" size={28} />
            </span>
          </div>
          <div className="p-4 flex-1 overflow-y-auto">
            {PageSettingData.map((setting) => {
              const Component = setting.component;
              return (
                <div
                  ref={dropdownRef}
                  key={setting.id}
                  className="border-b border-gray-300"
                  onClick={() =>
                    setOpenIndex(setting.id === openIndex ? null : setting.id)
                  }
                >
                  <div className="flex items-center justify-between py-3.75 cursor-pointer">
                    <h2 className="text-[16px] font-[Poppins]">
                      {setting.title}
                    </h2>
                    <span>
                      <ChevronDown
                        color="gray"
                        className={`${openIndex === setting.id ? "rotate-180" : ""} transition-transform duration-300`}
                      />
                    </span>
                  </div>
                  <Collapse
                    in={openIndex === setting.id}
                    timeout={300}
                    unmountOnExit
                  >
                    <div className="pb-3">
                      <p className="text-[14px] font-[Poppins] font-medium pb-2">
                        {setting.desc}
                      </p>
                      <Component />
                    </div>
                  </Collapse>
                </div>
              );
            })}
          </div>
          <div className="p-4 mt-auto">
            <Button
              text="Veiw Live Page"
              onClick={() => {}}
              className="text-[16px] w-full py-2.5"
              startIcon={<SquareArrowOutUpRight size={20} strokeWidth={1.5} />}
            />
          </div>
        </div>
      </Box>
    </Drawer>
  );
};
