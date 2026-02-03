import { Brush, Scan, Sun, Database, Users, ShieldHalf } from "lucide-react";
import type { CardType } from "../@types/Card.type";

const data = [
  {
    id: 1,
    title: "Editable Designs",
    desc: "Choose from professional themes that look great on all devices.",
    icon: Brush,
  },
  {
    id: 2,
    title: "Fully Customizable",
    desc: "Choose a template, change the colours and customize the content to what you need.",
    icon: Sun,
  },
  {
    id: 3,
    title: "Memorial QR Code",
    desc: "A specially generated code that can be placed on headstones, plaques, and memorial benches.",
    icon: Scan,
  },
  {
    id: 4,
    title: "Personal Content",
    desc: "Add the photos & videos you need alongside posts, or messages, from your users.",
    icon: Database,
  },
  {
    id: 5,
    title: "No registration needed",
    desc: "Friends & family don't need to create an account to visit the Memorial or share their memories.",
    icon: Users,
  },
  {
    id: 6,
    title: "Private & Secure",
    desc: "Add a password to your Memorial page, or you can leave it open for everyone to view and share.",
    icon: ShieldHalf,
  },
];

export const WhyUseAlway = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-(--primary-color) font-[Spectral] text-center text-[40px] font-light mb-2 max-md:text-[28px] max-md:font-semibold">
          How Does It Work
        </h1>
        <div className="h-0.5 bg-gray-300 w-24"></div>
      </div>
      <div className="grid grid-cols-12 gap-2.5">
        {data.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

interface CardProps {
  data: CardType;
}

const Card = ({ data }: CardProps) => {
  const Icon = data.icon;
  return (
    <div className="col-span-4 px-6.25 py-10 flex items-start gap-5 shadow-xl max-lg:col-span-6 max-sm:col-span-12 max-sm:mb-5">
      <span>
        <Icon size={40} strokeWidth={1.25} className="text-(--primary-color)" />
      </span>
      <div>
        <h3 className="text-[22px] font-[Spectral] text-(--primary-color) mb-2">
          {data.title}
        </h3>
        <p className="text-[14px] font-[Poppins] text-(--secondary-color)">
          {data.desc}
        </p>
      </div>
    </div>
  );
};
