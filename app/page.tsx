import DashboardLayout from "@/components/layout/DashboardLayout";
import Navigation from "@/components/nav/Navigation";
import AllTransactions from "@/components/transactions/AllTransactions";
import AllBalances from "@/components/wallet/AllBalances";
import Overview from "@/components/wallet/Overview";
import SingleBalance from "@/components/wallet/SingleBalance";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full md:w-8/12">
          <Overview />
        </div>

        <div className="w-full md:w-3/12">
          <AllBalances />
        </div>
      </div>

      <div className="">
        <AllTransactions />
      </div>
    </DashboardLayout>
  );
}
