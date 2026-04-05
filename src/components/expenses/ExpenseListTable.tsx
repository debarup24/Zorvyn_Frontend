import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import ActionBTN from "../../UI/buttons/ActionBTN";
import AddModal from "../../UI/modals/AddModal/AddModals";
import {
  TransactionForm,
  type TransactionFormData,
} from "../../UI/modals/AddModal/AddModalLogic";
import { useState } from "react";
import { MOCK_EXPENSE_LIST_DATA } from "../../data/mockData";
import { useAppData } from "../../context/AppContext";

const TableHeader = ["Sources", "Categories", "Amount", "Date", "Action"];

const ExpenseListTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { isModalOpen, setIsModalOpen } = useAppData();
  const [expenseData, setExpenseData] = useState(MOCK_EXPENSE_LIST_DATA);
  const [filteredExpenseData, setFilteredExpenseData] = useState(
    MOCK_EXPENSE_LIST_DATA,
  );

  const { isAdmin } = useAppData();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = expenseData.filter(
      (item) =>
        item.description.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term),
    );

    setFilteredExpenseData(filtered);
  };

  const handleAddTransaction = (data: TransactionFormData) => {
    const newItem = {
      id: Date.now(),
      ...data,
    };

    const updatedData = [newItem, ...expenseData];

    setExpenseData(updatedData);
    setFilteredExpenseData(updatedData);

    setIsModalOpen(false);
  };
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Expense List</h2>
        <div className="flex flex-col md:flex-row justify-around gap-2.5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Expenses"
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
          {isAdmin && (
            <ActionBTN
              size="sm"
              variant="brand"
              onClick={() => setIsModalOpen(true)}
            >
              Add Expenses
            </ActionBTN>
          )}
        </div>
      </div>

      {isAdmin && (
        <AddModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Expense"
        >
          <TransactionForm onSubmit={handleAddTransaction} type="expense" />
        </AddModal>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {TableHeader.map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredExpenseData.length > 0 ? (
              filteredExpenseData.map((item) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 text-sm text-gray-100">
                    {item.description}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-300">
                    {item.category}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-300">
                    ₹ {item.amount}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-300">
                    {item.date}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-300">
                    <button
                      className={`mr-2 ${isAdmin ? "text-indigo-400 hover:text-indigo-300 cursor-pointer" : "text-slate-600 cursor-not-allowed"} `}
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      className={`${isAdmin ? "text-red-400 hover:text-red-300" : "text-slate-600 cursor-not-allowed"} `}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-400">
                  No income found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ExpenseListTable;
