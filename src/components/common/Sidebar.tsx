import {
  Banknote,
  BarChart2,
  ChevronsLeft,
  ChevronsRight,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  { name: "Dashboard", icon: BarChart2, color: "#6366f1", href: "/" },
  {
    name: "Income",
    icon: TrendingUp,
    color: "#6EE7B7",
    href: "/income",
  },
  { name: "Expenses", icon: TrendingDown, color: "#EC4899", href: "/expenses" },
  {
    name: "Transactions",
    icon: Banknote,
    color: "#e3ed1f",
    href: "/transactions",
  },
  {
    name: "Insights",
    icon: TrendingUpDown,
    color: "#3B82F6",
    href: "/analytics",
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleMaxMinBtn = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className={`relative z-10 transition-all overflow-hidden duration-100 ease-in-out shrink-0 shadow-black ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMaxMinBtn}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          {isSidebarOpen ? (
            <ChevronsLeft size={28} />
          ) : (
            <ChevronsRight size={28} />
          )}
        </motion.button>

        <nav className="mt-8 grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: "20px" }}
                />

                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.1, delay: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
