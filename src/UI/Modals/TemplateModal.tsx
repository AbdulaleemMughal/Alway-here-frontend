import { Modal, Box } from "@mui/material";
import { Palette, X } from "lucide-react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 1200,
  maxHeight: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  outline: "none",
};

interface TemplateModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const TemplateModal = ({ open, setOpen }: TemplateModalProps) => {
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <div className="p-4 flex items-center justify-between border-b border-gray-300">
            <div className="flex items-center gap-2.5">
              <Palette strokeWidth={1.25} size={30} color="#7454a9" />
              <h4 className="text-(--primary-color) font-[Spectral] font-medium text-[24px] max-lg:text-[22px] max-sm:text-[20px]">
                Pick a theme
              </h4>
            </div>
            <span onClick={() => setOpen(false)}>
              <X
                strokeWidth={1.5}
                color="gray"
                size={30}
                className="cursor-pointer"
              />
            </span>
          </div>
          <div className="py-6.25 px-9.75 flex flex-col items-center max-md:py-5 max-md:px-4">
            <p className="font-[Poppins] text-(--secondary-color) mb-4 text-[16px] max-md:text-[14px]">
              Choose your Memorial template and start personalizing it. You can
              change this anytime later.
            </p>
            <div className="h-0.5 w-30 bg-gray-300"></div>
          </div>
        </Box>
      </Modal>
    </>
  );
};
