import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import IncomePage from "./pages/IncomePage";
import ExpensesPage from "./pages/ExpensesPage";
import InsightsPage from "./pages/InsightsPage";
import TransactionsPage from "./pages/TransactionsPage";
import { useAppData } from "./context/AppContext";
import { useEffect } from "react";

function App() {
  const { setIsModalOpen } = useAppData();
  const location = useLocation();

  // Every time the URL changes, close any open modals
  useEffect(() => {
    setIsModalOpen(false);
  }, [location.pathname, setIsModalOpen]);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-gray-800 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      <Sidebar />

      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/analytics" element={<InsightsPage />} />
      </Routes>
    </div>
  );
}

export default App;
