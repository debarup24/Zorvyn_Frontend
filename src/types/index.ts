export interface balanceData {
  month: string;
  balance: number;
}

export interface incomeData {
  month: string;
  income: number;
}

export interface expenseData {
  name: string;
  value: number;
}

export interface comparisonData {
  month: string;
  income: number;
  spend: number;
}

export interface INCOME_SOURCE_DATA {
  id?: number;
  description: string;
  category: string;
  date: string;
  amount: number;
}

export interface allIncomeSources {
  name: string;
  value: number;
}

export interface monthlyExpensesData {
  month: string;
  expense: number;
}

export interface EXPENSE_LIST_DATA {
  id?: number;
  description: string;
  category: string;
  date: string;
  amount: number;
}
