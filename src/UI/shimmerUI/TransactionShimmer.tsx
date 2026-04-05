import { Loader } from "lucide-react";

const TransactionShimmer = () => {
  return (
    <tr>
      <td colSpan={6} className="h-80 text-gray-400">
        <div className="flex flex-col items-center justify-center gap-4">
          <Loader className="animate-spin" size={32} />
          <span className="text-sm font-medium">Loading data...</span>
        </div>
      </td>
    </tr>
  );
};

export default TransactionShimmer;
