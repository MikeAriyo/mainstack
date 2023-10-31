import TransactionIn from "@/svgs/TransactionIn";
import TransactionOut from "@/svgs/TransactionOut";

interface ISingleTransactionInterface {
  product_name: string;
  name: string;
  status: string;
  amount: number;
  date: string;
  type: string;
}

const SingleTransaction: React.FC<ISingleTransactionInterface> = ({
  product_name,
  name,
  status,
  amount,
  date,
  type,
}) => {
  return (
    <div className="flex justify-between md:px-2 my-8">
      <div className="flex space-x-4">
        <div>{type === "deposit" ? <TransactionIn /> : <TransactionOut />}</div>

        <div>
          <p className="text-black text-[16px] font-semibold">
            {product_name || name || type}
          </p>
          {type === "deposit" && (
            <p className="text-gray-400 text-[14px] mt-2">{name}</p>
          )}
          {type === "withdrawal" && (
            <p
              className={`text-gray-400 text-[14px] mt-2 ${
                status === "successful"
                  ? "text-[#0ea163]"
                  : status === "pending"
                  ? "text-yellow-400"
                  : ""
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="font-extrabold text-black text-[16px]">USD {amount}</p>
        <p className="text-gray-400 text-[14px] mt-2">{date}</p>
      </div>
    </div>
  );
};

export default SingleTransaction;
