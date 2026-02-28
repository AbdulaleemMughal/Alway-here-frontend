import { Share2 } from "lucide-react";
import { SocialMediaCard } from "../../shared/SocialMediaCard";
import { FaWhatsapp, FaFacebookMessenger, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const socialMediaArray = [
  {
    id: 1,
    name: "Whatsapp",
    icon: FaWhatsapp,
  },
  {
    id: 2,
    name: "Messenger",
    icon: FaFacebookMessenger,
  },
  {
    id: 3,
    name: "Email",
    icon: MdOutlineEmail,
  },
  {
    id: 4,
    name: "Facebook",
    icon: FaFacebook,
  },
  {
    id: 5,
    name: "Twitter",
    icon: FaXTwitter,
  },
];

export const ShareYourPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-30 max-lg:flex-wrap max-lg:px-5">
        <div className="flex items-center text-(--primary-color) gap-5 max-lg:mb-5">
          <span>
            <Share2 size={18} />
          </span>
          <h2 className="font-[Poppins] text-[22px] font-medium">
            Share Your Page
          </h2>
        </div>
        <div className="flex items-center gap-8 max-lg:flex-wrap">
          {socialMediaArray.map((social) => {
            return (
              <SocialMediaCard
                key={social.id}
                name={social.name}
                icon={social.icon}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
