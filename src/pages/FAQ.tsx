import { Loader2, MessagesSquare } from "lucide-react";
import { Banner } from "../components/Banner";
import { Accordian } from "../UI/Accordion";
import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import type { FaqType } from "../@types/faq.type";
import axios from "axios";
import toast from "react-hot-toast";

export const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [faq, setFaq] = useState<FaqType[]>([]);

  async function getFaq() {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/api/get-faq");
      setFaq(response.data.faqs);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getFaq();
  }, []);

  const toggleId = (id: string) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <>
      <Banner title="Frequently Asked Questions" desc="Need Help?" />
      <div className="px-60.75 max-2xl:px-40 max-xl:px-30 max-lg:px-10 max-sm:px-6">
        <div className="mt-30 flex flex-col items-center">
          <span>
            <MessagesSquare
              size={40}
              strokeWidth={1.5}
              className="text-(--primary-color)"
            />
          </span>
          <p className="text-(--secondary-color) text-[16px] font-[Poppins] text-center my-5">
            Need help using Always-here? Find the most frequent questions /
            answers below. <br /> Please also don't hesitate to Contact Us for
            any further help.
          </p>
          <div className="w-25 h-0.5 bg-gray-300 "></div>
        </div>
        <div className="mb-30">
          {loading ? (
            <div className="mt-10 flex flex-col items-center justify-center">
              <Loader2 color="#7454a9" size={40} className="animate-spin" />
              <p className="font-[Poppins] text-[20px] mt-3 text-(--primary-color)">
                Getting FAQ's
              </p>
            </div>
          ) : (
            faq.map((faq) => {
              return (
                <Accordian
                  key={faq._id}
                  faq={faq}
                  open={openId}
                  toggleId={toggleId}
                />
              );
            })
          )}
          {}
        </div>
      </div>
    </>
  );
};
