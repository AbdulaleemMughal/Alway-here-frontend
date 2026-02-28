interface StatisticsCardProps {
  title: string;
  value: string;
  description: string;
}

export const StatisticsCard = ({ title, value, description }: StatisticsCardProps) => {
  return (
    <div className="p-5 col-span-4 flex flex-col items-start bg-white shadow-(--shadow-sm) rounded-lg max-lg:col-span-6 max-sm:col-span-12">
      <p className="mt-2 mb-4 text-[12px] font-[Poppins] text-(--secondary-color)">
        {title}
      </p>
      <h4 className="text-[20px] font-[Poppins] text-(--primary-color) font-medium">
        {value} <span>visits</span>
      </h4>
      <p className="my-4 text-[12px] font-[Poppins] text-(--secondary-color)">
        {description}
      </p>
    </div>
  );
};
