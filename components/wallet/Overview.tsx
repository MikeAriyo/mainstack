"use client";

import { LineChart } from "./chart/LineChart";

const Overview = () => {
  return (
    <div>
      <div className="flex space-x-28">
        <div>
          <p className="text-gray-400 text-[14px]">Available Balance</p>
          <h2 className="font-bold text-black text-[36px] pt-4">
            USD 120,500.00
          </h2>
        </div>

        <button className="bg-black text-white px-14 rounded-full hover:bg-slate-600 cursor-pointer h-12 my-4 ">
          <span className="text-white">Withdraw</span>
        </button>
      </div>

      <div className="mt-12">
        <LineChart />
      </div>
    </div>
  );
};

export default Overview;
