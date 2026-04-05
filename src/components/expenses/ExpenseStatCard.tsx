import { Banknote, HandCoins, IndianRupee, PiggyBank } from "lucide-react";
import StatCard from "../../UI/cards/StatCards";

type Verdict = "increased" | "decreased" | "same";

interface StatItem {
  id: number;
  title: string;
  icon: any;
  iconColor: string;
  value: string;
  change: number;
  verdict: Verdict;
  time: string;
}

const STATS_DATA_EXPENSE: StatItem[] = [
  {
    id: 1,
    title: "Total Expense",
    icon: HandCoins,
    iconColor: "#EC4899",
    value: "₹ 6,91,168",
    change: +21548,
    verdict: "increased",
    time: "Year",
  },
  {
    id: 2,
    title: "This Month Expense",
    icon: IndianRupee,
    iconColor: "#EC4899",
    value: "₹ 48,000",
    change: +0,
    verdict: "same",
    time: "Month",
  },
  {
    id: 3,
    title: "Highest Expense",
    icon: Banknote,
    iconColor: "#9645c4",
    value: "₹ 102,500",
    change: +58520,
    verdict: "increased",
    time: "Month",
  },
  {
    id: 4,
    title: "Savings Rate",
    icon: PiggyBank,
    iconColor: "#EC4899",
    value: "12.56%",
    change: +1.26,
    verdict: "increased",
    time: "Month",
  },
];

const ExpenseStatCard = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {STATS_DATA_EXPENSE.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          icon={stat.icon}
          value={stat.value}
          iconColor={stat.iconColor}
          change={stat.change}
          verdict={stat.verdict}
          time={stat.time}
        />
      ))}
    </div>
  );
};

export default ExpenseStatCard;
