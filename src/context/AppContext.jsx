import { createContext, useContext, useEffect, useState } from "react";
import { loadData, saveData } from "../utils/localStorage";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [appData, setAppData] = useState(loadData);

  useEffect(() => {
    saveData(appData);
  }, [appData]);

  return (
    <AppContext.Provider
      value={{
        appData,
        setAppData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;