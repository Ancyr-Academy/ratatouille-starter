import { Dependencies } from "@ratatouille/modules/store/dependencies";
import { createContext, useContext } from "react";

const DependenciesContext = createContext<Dependencies>(null as any);

export const DependenciesProvider: React.FC<{
  dependencies: Dependencies;
  children: React.ReactNode;
}> = ({ dependencies, children }) => {
  return (
    <DependenciesContext.Provider value={dependencies}>
      {children}
    </DependenciesContext.Provider>
  );
};

export const useDependencies = () => useContext(DependenciesContext);
