import { useEffect, useState, type ReactElement } from "react";
import TransactionShimmer from "../../UI/shimmerUI/TransactionShimmer";
import ActionBTN from "../../UI/buttons/ActionBTN";
import { Annoyed, Search } from "lucide-react";
import { useAppData } from "../../context/AppContext";
import useDebounce from "../../hook/useDebounce";

interface User {
  id: number;
  firstName: string;
  email?: string;
  phone?: string;
  company: {
    name: string;
    department: string;
  };
  address: {
    postalCode: string;
  };
  bank: {
    cardExpire: string;
    cardNumber: number;
  };
}

interface ApiResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

const Table_Header_Data = [
  "Sources",
  "Amount",
  "Transaction UID No.",
  "Date",
  "Type",
  "Category",
];

const TransactionDetails = (): ReactElement => {
  const [data, setData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const { isAdmin } = useAppData();

  const [isLoading, setIsLoading] = useState<boolean>(true); // loading for API progress

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (!debouncedSearchTerm) {
      setFilteredData(data);
      return;
    }

    const search = debouncedSearchTerm.toLowerCase();
    const filtered = data.filter((item) => {
      return (
        item.company.name.toLowerCase().includes(search) ||
        item.bank.cardNumber.toString().includes(search)
      );
    });

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [debouncedSearchTerm, data]);

  const PAGE_SIZE = 8;

  //API fetching
  const getTransactionDetails = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://dummyjson.com/users?limit=72`);
      const jsonData: ApiResponse = await response.json();
      setData(jsonData.users);
    } catch (error) {
      console.error("Error fetching transaction details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTransactionDetails();
  }, []);

  const totalTransactions: number = filteredData.length;
  const noOfPages: number = Math.ceil(totalTransactions / PAGE_SIZE);

  const start: number = (currentPage - 1) * PAGE_SIZE;
  const end: number = start + PAGE_SIZE;

  const pageChangeHandler = (selectedPage: number): void => {
    if (
      selectedPage >= 1 &&
      selectedPage <= noOfPages &&
      selectedPage !== currentPage
    ) {
      setCurrentPage(selectedPage);
    }
  };

  const handlePrev = (): void => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = (): void => {
    if (currentPage < noOfPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700">
      <div className="flex justify-between p-1">
        <div className="mb-2 text-gray-100 text-lg font-semibold">
          All Transactions
        </div>
        <div className="mb-2 flex gap-2.5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Transaction"
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
          <div>
            {isAdmin && (
              <ActionBTN size="sm" variant="brand">
                Download (csv/pdf)
              </ActionBTN>
            )}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto min-h-80">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {Table_Header_Data.map((head) => (
                <th
                  key={head}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {isLoading ? (
              <TransactionShimmer />
            ) : (
              filteredData.slice(start, end).map((curItem) => (
                <tr key={curItem.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {curItem.company.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold text-blue-100">
                      ₹ {curItem.address.postalCode}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold text-blue-100">
                      {curItem.bank.cardNumber}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold text-blue-100">
                      {curItem.bank.cardExpire}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex ${Number(curItem.address.postalCode) >= 50000 ? "text-green-300" : "text-red-400"} text-xs leading-5 font-semibold`}
                    >
                      {Number(curItem.address.postalCode) >= 50000
                        ? "Credited"
                        : "Debited"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">
                      {curItem.company.department}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {!isLoading && filteredData.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10 py-10 text-gray-500">
            <Annoyed className="text-gray-500 mb-4" size={48} />
            <p className="text-2xl font-semibold">Transactions NOT found</p>
            <p className="text-xs text-gray-500 mt-2">
              No transactions match your search!
            </p>
          </div>
        )}
      </div>
      {!isLoading && data.length > 0 && (
        <div className="flex pt-3 mt-3 justify-center gap-1">
          <button
            disabled={currentPage === 1}
            onClick={handlePrev}
            className={`cursor-pointer ${currentPage > 1 ? "" : "opacity-0"}`}
          >
            ⏪
          </button>

          <div className="py-1 px-1 m-1">
            {[...Array(noOfPages)].map((_, i) => (
              <span
                key={i}
                className={`p-1 m-1 hover:bg-slate-900 rounded-2xl cursor-pointer ${
                  i === currentPage - 1
                    ? "bg-slate-950 rounded-2xl text-amber-100 font-bold"
                    : "bg-transparent"
                } `}
                onClick={() => pageChangeHandler(i + 1)}
              >
                {i + 1}
              </span>
            ))}
          </div>

          <button
            disabled={currentPage === noOfPages}
            onClick={handleNext}
            className={`cursor-pointer ${currentPage < noOfPages ? "" : "opacity-0"}`}
          >
            ⏩
          </button>
        </div>
      )}
      <div className="justify-center text-center text-xs text-slate-400 mt-2">
        page : {currentPage}
      </div>
    </div>
  );
};

export default TransactionDetails;
