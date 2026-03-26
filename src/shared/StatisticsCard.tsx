interface StatisticsCardProps {
  title: string;
  value: number;
  description: string;
  name: string;
}

export const StatisticsCard = ({
  title,
  value,
  description,
  name,
}: StatisticsCardProps) => {
  return (
    <div className="p-5 col-span-3 flex flex-col items-start bg-white shadow-(--shadow-sm) rounded-lg max-lg:col-span-6 max-sm:col-span-12">
      <p className="mt-2 mb-4 text-[12px] font-[Poppins] text-(--secondary-color)">
        {title}
      </p>
      <h4 className="text-[20px] font-[Poppins] text-(--primary-color) font-medium">
        {value} <span>{name}</span>
      </h4>
      <p className="my-4 text-[12px] font-[Poppins] text-(--secondary-color)">
        {description}
      </p>
    </div>
  );
};
