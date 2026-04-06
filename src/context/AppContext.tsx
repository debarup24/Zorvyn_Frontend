import { createContext, useContext, useState, type ReactNode } from "react";
import type { TransactionFormData } from "../UI/modals/AddModal/AddModalLogic";
import {
  MOCK_EXPENSE_LIST_DATA,
  MOCK_INCOME_SOURCE_DATA,
} from "../data/mockData";
import type { EXPENSE_LIST_DATA, INCOME_SOURCE_DATA } from "../types";

export interface AppContextType {
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddIncome: (data: TransactionFormData) => void;
  incomeData: INCOME_SOURCE_DATA[];
  setIncomeData: React.Dispatch<React.SetStateAction<INCOME_SOURCE_DATA[]>>;
  expenseData: EXPENSE_LIST_DATA[];
  setExpenseData: React.Dispatch<React.SetStateAction<EXPENSE_LIST_DATA[]>>;
  handleAddExpenses: (data: TransactionFormData) => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [incomeData, setIncomeData] = useState<INCOME_SOURCE_DATA[]>(
    MOCK_INCOME_SOURCE_DATA,
  );
  const [filteredIncomeData, setFilteredIncomeData] = useState<
    INCOME_SOURCE_DATA[]
  >(MOCK_INCOME_SOURCE_DATA);
  const [expenseData, setExpenseData] = useState<EXPENSE_LIST_DATA[]>(
    MOCK_EXPENSE_LIST_DATA,
  );
  const [filteredExpenseData, setFilteredExpenseData] = useState(
    MOCK_EXPENSE_LIST_DATA,
  );

  //add income
  const handleAddIncome = (data: TransactionFormData) => {
    const newItem = {
      id: Date.now(),
      ...data,
    };

    const updatedData = [newItem, ...incomeData];

    setIncomeData(updatedData);
    setFilteredIncomeData(updatedData);

    setIsModalOpen(false);
  };

  // ADD Expense
  const handleAddExpenses = (data: TransactionFormData) => {
    const newItem = {
      id: Date.now(),
      ...data,
    };

    const updatedData = [newItem, ...expenseData];

    setExpenseData(updatedData);
    setFilteredExpenseData(updatedData);

    setIsModalOpen(false);
  };

  const value = {
    isAdmin,
    setIsAdmin,
    isModalOpen,
    setIsModalOpen,
    incomeData,
    setIncomeData,
    filteredIncomeData,
    setFilteredIncomeData,
    handleAddIncome,
    expenseData,
    setExpenseData,
    filteredExpenseData,
    setFilteredExpenseData,
    handleAddExpenses,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppData = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppData must be used within AppProvider");
  }
  return context;
};
