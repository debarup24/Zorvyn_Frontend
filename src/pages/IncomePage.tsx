import Header from "../components/common/Header";
import IncomeOverviewChart from "../components/income/IncomeOverviewChart";
import IncomeCategoryDistribution from "../components/income/IncomeCategoryDistribution";
import IncomeSourceTable from "../components/income/IncomeSourceTable";
import IncomeStatsCard from "../components/income/IncomeStatsCard";
import { useAppData } from "../context/AppContext";

const IncomePage = () => {
  const { isModalOpen } = useAppData();
  return (
    <div
      className={`flex-1 ${isModalOpen ? "overflow-hidden" : "overflow-auto"}  overflow-auto relative z-10`}
    >
      <Header title="Dashboard Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 mt-8 lg:px-8">
        {/* STATS CARDS */}
        <IncomeStatsCard />
        <IncomeSourceTable />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4 lg:mb-6">
          <IncomeOverviewChart />
          <IncomeCategoryDistribution />
        </div>
      </main>
    </div>
  );
};

export default IncomePage;
