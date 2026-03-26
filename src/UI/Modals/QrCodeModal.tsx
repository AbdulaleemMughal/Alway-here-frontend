import { Box, Modal } from "@mui/material";
import { X } from "lucide-react";
import QRCode from "react-qr-code";
import { Button } from "../Button";
import type React from "react";
import { useRef } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  overflowY: "auto",
};

interface QrCodeModalProps {
  link: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const QrCodeModal = ({ link, open, setOpen }: QrCodeModalProps) => {
  const qrRef = useRef<HTMLDivElement | null>(null);

  const handleQrDownload = () => {
    const svg = qrRef.current?.querySelector("svg");
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);

    const img = new Image();
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      const padding = 40;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width + padding * 2;
      canvas.height = img.height + padding * 2;

      ctx!.fillStyle = "#ffffff";
      ctx!.fillRect(0, 0, canvas.width, canvas.height);

      ctx?.drawImage(img, padding, padding);

      const png = canvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.href = png;
      downloadLink.download = "qr-code.png";
      downloadLink.click();

      URL.revokeObjectURL(url);
    };

    img.src = url;
  };
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={style}>
        <div className="p-4 flex items-center justify-between border-b border-gray-300">
          <h1
            className="text-2xl font-[Spectral] text-(--primary-color)"
          >
            Scan or Download your Qr Code.
          </h1>
          <span className="cursor-pointer" onClick={() => setOpen(false)}>
            <X color="gray" size={28} strokeWidth={2} />
          </span>
        </div>
        <div className="py-5 px-6.25">
          <div ref={qrRef} className="flex justify-center">
            <QRCode value={link} level="H" />
          </div>
          <div className="mt-8 flex justify-center">
            <Button text="Download Qr Code" onClick={handleQrDownload} />
          </div>
        </div>
      </Box>
    </Modal>
  );
};
