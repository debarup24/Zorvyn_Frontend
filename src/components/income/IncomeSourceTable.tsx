import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import ActionBTN from "../../UI/buttons/ActionBTN";
import { useState } from "react";
import AddModal from "../../UI/modals/AddModal/AddModals";
import {
  TransactionForm,
  type TransactionFormData,
} from "../../UI/modals/AddModal/AddModalLogic";
import { MOCK_INCOME_SOURCE_DATA } from "../../data/mockData";
import { useAppData } from "../../context/AppContext";

const TableHeader = ["Sources", "Categories", "Amount", "Date", "Action"];

const IncomeSourceTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [incomeData, setIncomeData] = useState(MOCK_INCOME_SOURCE_DATA);
  const [filteredIncomeData, setFilteredIncomeData] = useState(
    MOCK_INCOME_SOURCE_DATA,
  );
  const { isAdmin, isModalOpen, setIsModalOpen } = useAppData();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = incomeData.filter(
      (item) =>
        item.description.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term),
    );

    setFilteredIncomeData(filtered);
  };

  const handleAddTransaction = (data: TransactionFormData) => {
    const newItem = {
      id: Date.now(),
      ...data,
    };

    const updatedData = [newItem, ...incomeData];

    setIncomeData(updatedData);
    setFilteredIncomeData(updatedData);

    setIsModalOpen(false);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Income Sources</h2>

        <div className="flex flex-col md:flex-row gap-2.5">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Income"
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
              Add Income
            </ActionBTN>
          )}
        </div>
      </div>

      {/* Modal */}
      {isAdmin && (
        <AddModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Income"
        >
          <TransactionForm onSubmit={handleAddTransaction} type="income" />
        </AddModal>
      )}

      {/* Table */}
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
            {filteredIncomeData.length > 0 ? (
              filteredIncomeData.map((item) => (
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
                      className={`  mr-2 ${isAdmin ? "text-indigo-400 hover:text-indigo-300 cursor-pointer" : "text-slate-600 cursor-not-allowed"} `}
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      className={`  ${isAdmin ? "text-red-400 hover:text-red-300" : "text-slate-600 cursor-not-allowed"} `}
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

export default IncomeSourceTable;
