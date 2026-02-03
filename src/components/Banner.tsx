interface BannerProps {
  title: string;
  desc: string;
};

export const Banner = ({ title, desc }: BannerProps) => {
  return (
    <div className="bg-linear-to-r from-(--primary-color) to-(#e0cefd) py-32 px-60.75 max-2xl:px-40 max-xl:px-30 max-lg:px-10 max-sm:px-6 max-md:flex max-md:flex-col max-md:items-center">
      <h6 className="mb-3 text-[14px] text-(--footer-text) font-semibold font-[Poppins]">
        {desc}
      </h6>
      <h1 className="text-[46px] max-md:text-[28px] font-[Spectral] text-(--footer-text) font-light">
        {title}
      </h1>
    </div>
  );
};
