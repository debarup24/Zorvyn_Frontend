import { Banknote, IndianRupee, PiggyBank, Wallet } from "lucide-react";

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

const STATS_DATA_INCOME: StatItem[] = [
  {
    id: 1,
    title: "Total Income",
    icon: Wallet,
    iconColor: "#EC4899",
    value: "₹ 14,59,714",
    change: -72000,
    verdict: "decreased",
    time: "Year",
  },
  {
    id: 2,
    title: "This Month Income",
    icon: IndianRupee,
    iconColor: "#EC4899",
    value: "₹ 1,0,8000",
    change: 0,
    verdict: "same",
    time: "Month",
  },
  {
    id: 3,
    title: "Highest Income",
    icon: Banknote,
    iconColor: "#EC4899",
    value: "₹ 91,500",
    change: 0,
    verdict: "same",
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

const IncomeStatsCard = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {STATS_DATA_INCOME.map((stat) => (
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

export default IncomeStatsCard;
