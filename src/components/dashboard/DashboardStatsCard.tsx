import { HandCoins, IndianRupee, PiggyBank, Wallet } from "lucide-react";
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

const STATS_DATA: StatItem[] = [
  {
    id: 1,
    title: "Total Balance",
    icon: Wallet,
    iconColor: "#EC4899",
    value: "₹ 7,68,546",
    change: 18000,
    verdict: "increased",
    time: "Year",
  },
  {
    id: 2,
    title: "Total Income",
    icon: IndianRupee,
    iconColor: "#EC4899",
    value: "₹ 14,59,714",
    change: -72000,
    verdict: "decreased",
    time: "Year",
  },
  {
    id: 3,
    title: "Total Expenses",
    icon: HandCoins,
    iconColor: "#EC4899",
    value: "₹ 6,91,168",
    change: 21548,
    verdict: "increased",
    time: "Year",
  },
  {
    id: 4,
    title: "Savings Rate",
    icon: PiggyBank,
    iconColor: "#EC4899",
    value: "8.56%",
    change: 0,
    verdict: "same",
    time: "Year",
  },
];

const DashboardStatsCard = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {STATS_DATA.map((stat) => (
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

export default DashboardStatsCard;
