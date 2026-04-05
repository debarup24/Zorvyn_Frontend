import { useAppData } from "../../context/AppContext";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const { isAdmin, setIsAdmin, isModalOpen, setIsModalOpen } = useAppData();

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === "admin") {
      setIsAdmin(true);
    } else {
      if (isModalOpen === true) {
        setIsModalOpen(false);
      }
      setIsAdmin(false);
    }
  };

  return (
    <div className="flex justify-between bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-sm md:text-lg lg:text-xl font-semibold text-gray-200">
          {title}
        </h1>
      </div>

      <div className="p-4 mr-4 lg:mr-10">
        <select
          value={isAdmin ? "admin" : "viewer"}
          onChange={handleRoleChange}
          className="bg-slate-800 border border-gray-500 rounded-md px-0.5 py-0 lg:px-2 lg:py-0.5 text-white"
        >
          <option value="admin">Admin</option>
          <option value="viewer">Viewer</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
