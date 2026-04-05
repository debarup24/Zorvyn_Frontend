import Header from "../components/common/Header";
import TransactionDetails from "../components/transactions/TransactionDetails";

const TransactionsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Transactions Details" />

      <main className="max-w-7xl mx-auto py-6 px-4 mt-8 lg:px-8">
        <TransactionDetails />
      </main>
    </div>
  );
};

export default TransactionsPage;
