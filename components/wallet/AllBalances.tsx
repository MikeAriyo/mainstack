import SingleBalance from "./SingleBalance";

const AllBalances = () => {
  return (
    <div className="">
      <SingleBalance title="Ledger Balance" balance={1260} />
      <SingleBalance title="Total Payout" balance={55080.0} />
      <SingleBalance title="Total Revenue" balance={175580.0} />
      <SingleBalance title="Pending Payout" balance={1205.0} />
    </div>
  );
};

export default AllBalances;
