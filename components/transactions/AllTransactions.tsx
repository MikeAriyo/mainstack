import SingleTransaction from "./SingleTransaction";

const AllTransactions = () => {
  return (
    <div className="pt-12 px-6">
      <div className="flex justify-between">
        <div className="">
          <p className="text-[24px] font-extrabold text-black">
            24 Transactions
          </p>
          <p className="text-gray-400 text-[14px] mt-1">
            Your transactions for the last 7 days
          </p>
        </div>

        <div className="flex space-x-4">
          <div className="px-12 bg-gray-200 rounded-3xl flex justify-center text-center pt-4 cursor-pointer">
            Filter
          </div>
          <div className="px-12 bg-gray-200 rounded-3xl flex justify-center text-center pt-4 cursor-pointer">
            Export
          </div>
        </div>
      </div>

      <hr className="mt-6"></hr>

      <div className="">
        <SingleTransaction
          product_name="Psychology of Money"
          name="Roy Cash"
          type="withdrawal"
          amount={600}
          date="Apr 03, 2022"
          status="successful"
        />

        <SingleTransaction
          product_name="Psychology of Money"
          name="Roy Cash"
          type="withdrawal"
          amount={600}
          date="Apr 03, 2022"
          status="successful"
        />

        <SingleTransaction
          product_name="Psychology of Money"
          name="Roy Cash"
          type="deposit"
          amount={600}
          date="Apr 03, 2022"
          status="successful"
        />

        <SingleTransaction
          product_name="Psychology of Money"
          name="Roy Cash"
          type="withdrawal"
          amount={600}
          date="Apr 03, 2022"
          status="successful"
        />

        <SingleTransaction
          product_name="Psychology of Money"
          name="Roy Cash"
          type="deposit"
          amount={600}
          date="Apr 03, 2022"
          status="successful"
        />

        <SingleTransaction
          product_name="Psychology of Money"
          name="Roy Cash"
          type="withdrawal"
          amount={600}
          date="Apr 03, 2022"
          status="successful"
        />

        <SingleTransaction
          product_name="Psychology of Money"
          name="Roy Cash"
          type="deposit"
          amount={600}
          date="Apr 03, 2022"
          status="successful"
        />
      </div>
    </div>
  );
};

export default AllTransactions;
