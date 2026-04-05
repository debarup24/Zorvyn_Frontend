import Header from "../components/common/Header";
import BalanceTrendsChart from "../components/dashboard/BalanceTrendsChart";
import ComparisonGraph from "../components/dashboard/ComparisonGraph";
import DashboardStatsCard from "../components/dashboard/DashboardStatsCard";
import SpendingCategoryDistributionChart from "../components/dashboard/SpendingCategoryDistributionChart";

const DashboardPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Dashboard Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 mt-8 lg:px-8">
        {/* STATS CARDS */}
        <DashboardStatsCard />
        {/* Next Sec */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4 lg:mb-6">
          <BalanceTrendsChart />
          <SpendingCategoryDistributionChart />
        </div>
        <ComparisonGraph />
      </main>
    </div>
  );
};

export default DashboardPage;
