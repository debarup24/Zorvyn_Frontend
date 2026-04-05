import Header from "../components/common/Header";
import ComparisonGraph from "../components/dashboard/ComparisonGraph";
import SpendingCategoryDistributionChart from "../components/dashboard/SpendingCategoryDistributionChart";
import ExpenseOverviewChart from "../components/expenses/ExpenseOverviewChart";
import IncomeCategoryDistribution from "../components/income/IncomeCategoryDistribution";
import IncomeOverviewChart from "../components/income/IncomeOverviewChart";
import AIPoweredInsights from "../components/insights/AIPoweredInsights";
import InsightsStatsCard from "../components/insights/InsightsStatsCard";

const InsightsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Insights" />

      <main className="max-w-7xl mx-auto py-6 px-4 mt-8 lg:px-8">
        <InsightsStatsCard />
        <ComparisonGraph />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <IncomeOverviewChart />
          <ExpenseOverviewChart />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <IncomeCategoryDistribution />
          <SpendingCategoryDistributionChart />
        </div>

        <AIPoweredInsights />
      </main>
    </div>
  );
};

export default InsightsPage;
