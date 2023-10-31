"use client";

import { useGetTransactionsQuery } from "@/api/services";
import SingleTransaction from "./SingleTransaction";
import Arrow from "@/svgs/Arrow";
import Download from "@/svgs/Download";

const AllTransactions = () => {
  const { data } = useGetTransactionsQuery({});

  return (
    <div className="pt-12  md:px6">
      <div className="flex justify-between">
        <div className="">
          <p className="text-[19px] md:text-[24px] font-extrabold text-black">
            {data?.length} Transactions
          </p>
          <p className="text-gray-400 text-[14px] mt-1">
            Your transactions for the last 7 days
          </p>
        </div>

        <div className="hidden md:flex space-x-4">
          <div className="px-12 bg-gray-200 rounded-3xl flex justify-center text-center pt-5 cursor-pointer space-x-2">
            <p className="font-bold">Filter</p>

            <div className="">
              <Arrow />
            </div>
          </div>
          <div className="px-12 bg-gray-200 rounded-3xl flex justify-center text-center pt-4 cursor-pointer space-x-2">
            <p className="font-bold">Export</p>

            <div className="">
              <Download />
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-6"></hr>

      <div className="">
        {data?.map((transaction: any) => (
          <SingleTransaction
            product_name={transaction?.metadata?.product_name}
            name={transaction?.metadata?.name}
            type={transaction?.type}
            amount={transaction?.amount}
            date={transaction?.date}
            status={transaction?.status}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTransactions;
