"use client";

import { useGetWalletQuery } from "@/api/services";
import SingleBalance from "./SingleBalance";

const AllBalances = () => {
  const { data } = useGetWalletQuery({});

  return (
    <div className="">
      <SingleBalance title="Ledger Balance" balance={data?.ledger_balance} />
      <SingleBalance title="Total Payout" balance={data?.total_payout} />
      <SingleBalance title="Total Revenue" balance={data?.total_revenue} />
      <SingleBalance title="Pending Payout" balance={data?.pending_payout} />
    </div>
  );
};

export default AllBalances;
