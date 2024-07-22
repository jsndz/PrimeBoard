"use client";
import React, { createContext, useState, useContext } from "react";

interface SalesContextType {
  refresh: boolean;
  triggerRefresh: () => void;
}

const SalesContext = createContext<SalesContextType | undefined>(undefined);

export const SalesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh((prev) => {
      console.log("Previous refresh state:", prev); // Debugging line
      const newState = !prev;
      console.log("New refresh state:", newState); // Debugging line
      return newState;
    });
  };

  return (
    <SalesContext.Provider value={{ refresh, triggerRefresh }}>
      {children}
    </SalesContext.Provider>
  );
};

export const useSales = () => {
  const context = useContext(SalesContext);
  if (!context) {
    throw new Error("useSales must be used within a SalesProvider");
  }
  return context;
};
