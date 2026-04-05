import { motion } from "framer-motion";

type Verdict = "increased" | "decreased" | "same";

interface StatCardProps {
  title: string;
  icon: any;
  value: string;
  iconColor: string;
  change?: number;
  verdict?: Verdict;
  time?: string;
  from?: string;
  period?: string;
}

const StatCard = ({
  title,
  icon: Icon,
  value,
  iconColor,
  verdict,
  change,
  time,
  from,
  period,
}: StatCardProps) => {
  const verdictStyles: Record<Verdict, string> = {
    increased: "text-green-500",
    decreased: "text-red-500",
    same: "text-orange-300",
  };

  const formattedChange =
    change !== undefined ? (change >= 0 ? `+${change}` : `${change}`) : null;

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
      whileHover={{ y: -5 }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-300">
          <Icon size={22} className="mr-2" style={{ color: iconColor }} />
          {title}
        </span>
        <p className="mt-1 text-xl  xl:text-3xl font-semibold text-gray-100">
          {value}
        </p>

        {formattedChange && verdict && (
          <p className={`mt-1 text-xs ${verdictStyles[verdict]}`}>
            {formattedChange} from last {time ?? ""}
          </p>
        )}
        {from && <p className={`mt-1 text-xs text-amber-400`}>from {from}</p>}

        {period && (
          <p className={`mt-1 text-xs text-amber-400`}>on {period} month</p>
        )}
      </div>
    </motion.div>
  );
};

export default StatCard;
