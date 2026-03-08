import Switch from "@mui/material/Switch";
import type { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/appStore";
import { alpha, styled } from "@mui/material";

interface ColorSwitchProps {
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ColorSwitch = ({ value, onChange }: ColorSwitchProps) => {
  const pageColor = useSelector(
    (store: RootState) => store.memorial.accentColor,
  );

  const PinkSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: pageColor,
      "&:hover": {
        backgroundColor: alpha(pageColor, theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: pageColor,
    },
  }));

  return <PinkSwitch checked={value} onChange={onChange} />;
};
