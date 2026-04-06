import Header from "../components/common/Header";
import SpendingCategoryDistributionChart from "../components/dashboard/SpendingCategoryDistributionChart";
import ExpenseListTable from "../components/expenses/ExpenseListTable";
import ExpenseOverviewChart from "../components/expenses/ExpenseOverviewChart";
import ExpenseStatCard from "../components/expenses/ExpenseStatCard";
import { useAppData } from "../context/AppContext";
import { TransactionForm } from "../UI/modals/AddModal/AddModalLogic";
import AddModal from "../UI/modals/AddModal/AddModals";

const ExpensesPage = () => {
  const { isAdmin, isModalOpen, setIsModalOpen, handleAddExpenses } =
    useAppData();
  return (
    <div
      className={`flex-1 ${isModalOpen ? "overflow-hidden" : "overflow-auto"}  overflow-auto relative z-10`}
    >
      <Header title="Expenses" />

      {isAdmin && (
        <AddModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Expense"
        >
          <TransactionForm onSubmit={handleAddExpenses} type="expense" />
        </AddModal>
      )}
      <main className="max-w-7xl mx-auto py-6 px-4 mt-8 lg:px-8">
        <ExpenseStatCard />

        <ExpenseListTable />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4 lg:mb-6">
          <ExpenseOverviewChart />
          <SpendingCategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ExpensesPage;
