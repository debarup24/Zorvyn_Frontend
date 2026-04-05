import { createContext, useContext, useState, type ReactNode } from "react";

export interface AppContextType {
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const value = { isAdmin, setIsAdmin, isModalOpen, setIsModalOpen };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppData = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppData must be used within AppProvider");
  }
  return context;
};
