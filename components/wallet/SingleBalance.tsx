import Info from "@/svgs/Info";

interface ISingleBalance {
  title: string;
  balance: number;
}

const SingleBalance: React.FC<ISingleBalance> = ({ title, balance }) => {
  return (
    <div className="flex justify-between mb-6">
      <div>
        <p className="text-gray-400 text-[14px]">{title}</p>
        <h2 className="font-bold text-black text-[28px] pt-4">USD {balance}</h2>
      </div>

      <div className="cursor-pointer mt-2">
        <Info />
      </div>
    </div>
  );
};

export default SingleBalance;
