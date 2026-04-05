import { HandCoins, IndianRupee, PiggyBank, Wallet } from "lucide-react";

import StatCard from "../../UI/cards/StatCards";

interface StatItem {
  id: number;
  title: string;
  icon: any;
  iconColor: string;
  value: string;
  from?: string;
  period?: string;
}

const INSIGHTS_STATS_DATA: StatItem[] = [
  {
    id: 1,
    title: "Highest Income in a Month",
    icon: Wallet,
    iconColor: "#EC4899",
    value: "₹ 1,05,546",
    period: "August",
  },
  {
    id: 2,
    title: "Highest Expenses in a Month",
    icon: HandCoins,
    iconColor: "#EC4899",
    value: "₹ 1,09,168",
    period: "December",
  },
  {
    id: 3,
    title: "Most Income",
    icon: IndianRupee,
    iconColor: "#EC4899",
    value: "₹ 9,59,714",
    from: "Salary",
  },

  {
    id: 4,
    title: "Most Spending",
    icon: PiggyBank,
    iconColor: "#EC4899",
    value: "4,80,000",
    from: "Rent",
  },
  {
    id: 5,
    title: "Least Income in a Month",
    icon: Wallet,
    iconColor: "#6EE7B7",
    value: "₹ 89,546",
    period: "October",
  },
  {
    id: 6,
    title: "Least Expenses in a Month",
    icon: HandCoins,
    iconColor: "#6EE7B7",
    value: "₹ 26,168",
    period: "March",
  },
  {
    id: 7,
    title: "Least Income",
    icon: IndianRupee,
    iconColor: "#6EE7B7",
    value: "₹ 9714",
    from: "Freelancing",
  },
  {
    id: 8,
    title: "Least Spending",
    icon: PiggyBank,
    iconColor: "#6EE7B7",
    value: "4000",
    from: "Books",
  },
];

const InsightsStatsCard = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 mb-8">
      {INSIGHTS_STATS_DATA.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          icon={stat.icon}
          value={stat.value}
          iconColor={stat.iconColor}
          from={stat.from}
          period={stat.period}
        />
      ))}
    </div>
  );
};

export default InsightsStatsCard;
