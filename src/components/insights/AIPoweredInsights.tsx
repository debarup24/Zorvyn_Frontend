import { motion } from "framer-motion";
import {
  BadgeCheck,
  CircleAlert,
  ChartNoAxesCombined,
  IndianRupee,
} from "lucide-react";
import { useAppData } from "../../context/AppContext";

interface InsightsStatItem {
  icon: any;
  color: string;
  insight: string;
}

const INSIGHTS: InsightsStatItem[] = [
  {
    icon: BadgeCheck,
    color: "text-green-500",
    insight: "Income sources are highly steady and stable",
  },
  {
    icon: CircleAlert,
    color: "text-red-500",
    insight:
      "Sometimes high spikes in expenses which is way more from average expenses",
  },
  {
    icon: ChartNoAxesCombined,
    color: "text-purple-500",
    insight: "Little inconsistance in Investments spend on monthly basis",
  },
  {
    icon: IndianRupee,
    color: "text-yellow-500",
    insight:
      "Highly dependent on monthly salary, 84% income is coming from salary only!",
  },
];

const AIPoweredInsights = () => {
  const { isAdmin } = useAppData();
  return (
    <motion.div
      className="bg-gray-800 min-h-50 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        AI-Powered Insights
      </h2>
      {!isAdmin ? (
        <div className="space-y-4 flex items-center">
          <p className="text-gray-400 text-sm">
            This section is visible to Admin only!
          </p>{" "}
        </div>
      ) : (
        <div className="space-y-4">
          {INSIGHTS.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
                <item.icon className={`size-6 ${item.color}`} />
              </div>
              <p className="text-gray-300">{item.insight}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};
export default AIPoweredInsights;
