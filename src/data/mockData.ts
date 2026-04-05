import type {
  allIncomeSources,
  balanceData,
  comparisonData,
  EXPENSE_LIST_DATA,
  expenseData,
  INCOME_SOURCE_DATA,
  incomeData,
  monthlyExpensesData,
} from "../types";

export const mockBalanceData: balanceData[] = [
  { month: "Apr", balance: 45000 },
  { month: "May", balance: 52000 },
  { month: "Jun", balance: 47500 },
  { month: "Jul", balance: 32000 },
  { month: "Aug", balance: 46200 },
  { month: "Sep", balance: 48000 },
  { month: "Oct", balance: 5560 },
  { month: "Nov", balance: 39900 },
  { month: "Dec", balance: 100 },
  { month: "Jan", balance: 40000 },
  { month: "Feb", balance: 49200 },
  { month: "Mar", balance: 46990 },
];

export const mockIncomeData: incomeData[] = [
  { month: "Apr", income: 110000 },
  { month: "May", income: 90000 },
  { month: "Jun", income: 95000 },
  { month: "Jul", income: 102000 },
  { month: "Aug", income: 98000 },
  { month: "Sep", income: 88000 },
  { month: "Oct", income: 114000 },
  { month: "Nov", income: 106000 },
  { month: "Dec", income: 108000 },
  { month: "Jan", income: 92000 },
  { month: "Feb", income: 101000 },
  { month: "Mar", income: 105000 },
];

export const mockMonthlyExpense: monthlyExpensesData[] = [
  { month: "Apr", expense: 51000 },
  { month: "May", expense: 44000 },
  { month: "Jun", expense: 39600 },
  { month: "Jul", expense: 46200 },
  { month: "Aug", expense: 41200 },
  { month: "Sep", expense: 32900 },
  { month: "Oct", expense: 70500 },
  { month: "Nov", expense: 51800 },
  { month: "Dec", expense: 88600 },
  { month: "Jan", expense: 47200 },
  { month: "Feb", expense: 39800 },
  { month: "Mar", expense: 40909 },
];

export const mockExpenseData: expenseData[] = [
  { name: "Flat Rent", value: 45000 },
  { name: "Clothing", value: 20500 },
  { name: "Home & Garden", value: 10200 },
  { name: "Trips", value: 10900 },
  { name: "Restaurants", value: 20200 },
  { name: "Grocery", value: 37200 },
  { name: "Transport", value: 18400 },
  { name: "Investment", value: 12400 },

  { name: "Books", value: 2100 },
];

export const mockComparisonData: comparisonData[] = [
  { month: "Jul", income: 101000, spend: 45000 },
  { month: "Aug", income: 99000, spend: 42800 },
  { month: "Sep", income: 95000, spend: 46000 },
  { month: "Oct", income: 90000, spend: 92900 },
  { month: "Nov", income: 105000, spend: 82700 },
  { month: "Dec", income: 100200, spend: 109200 },
  { month: "Jan", income: 96000, spend: 45500 },
  { month: "Feb", income: 95500, spend: 40800 },
  { month: "Mar", income: 107000, spend: 26500 },
];

export const MOCK_INCOME_SOURCE_DATA: INCOME_SOURCE_DATA[] = [
  {
    id: 1,
    description: "Salary",
    category: "Salary",
    date: "1/04/2026",
    amount: 82000,
  },
  {
    id: 2,
    description: "Stock market",
    category: "Investments",
    date: "2/04/2026",
    amount: 4000,
  },
  {
    id: 3,
    description: "Teaching",
    category: "Others",
    date: "3/04/2026",
    amount: 12000,
  },
  {
    id: 4,
    description: "FD Returns",
    category: "Investments",
    date: "5/04/2026",
    amount: 6256,
  },
  {
    id: 5,
    description: "Dividends",
    category: "Investments",
    date: "5/04/2026",
    amount: 5120,
  },
  {
    id: 6,
    description: "Freelance",
    category: "others",
    date: "5/04/2026",
    amount: 9120,
  },
];

export const mockAllIncomeSources: allIncomeSources[] = [
  { name: "Salary", value: 956000 },
  { name: "Investments", value: 109500 },
  { name: "others", value: 70200 },
];

export const MOCK_EXPENSE_LIST_DATA: EXPENSE_LIST_DATA[] = [
  {
    id: 1,
    description: "Flat Rent",
    category: "Rent",
    date: "1/04/2026",
    amount: 82000,
  },
  {
    id: 2,
    description: "Stock market",
    category: "Investments",
    date: "2/04/2026",
    amount: 8400,
  },
  {
    id: 3,
    description: "Cloth Shopping",
    category: "Clothing",
    date: "3/04/2026",
    amount: 2900,
  },
  {
    id: 4,
    description: "Biriyani",
    category: "Restaurants",
    date: "5/04/2026",
    amount: 1156,
  },
  {
    id: 5,
    description: "Grocery Items",
    category: "Grocery",
    date: "5/04/2026",
    amount: 10120,
  },
  {
    id: 6,
    description: "Camera",
    category: "Electronics",
    date: "5/04/2026",
    amount: 69120,
  },
];
