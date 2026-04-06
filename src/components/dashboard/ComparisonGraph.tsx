import { useState } from "react";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { mockComparisonData } from "../../data/mockData";

const ComparisonGraph = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>("Monthly");

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center gap-1 mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-100">
          Income vs Spend
        </h2>
        <select
          className="bg-gray-700 text-white rounded-md px-1.5 md:px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedTimeRange}
          onChange={(e) => setSelectedTimeRange(e.target.value)}
        >
          <option>Yearly</option>
          <option>Monthly</option>
          <option>Quarterly</option>
        </select>
      </div>

      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <AreaChart data={mockComparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#71db60"
              fill="#559e4a"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="spend"
              stroke="#a8131a"
              fill="#eb2f38"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ComparisonGraph;
