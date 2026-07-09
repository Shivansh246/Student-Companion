import { createContext, useEffect, useState } from "react";
import { loadData, saveData } from "../utils/localStorage";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [appData, setAppData] = useState(loadData);

  useEffect(() => {
    saveData(appData);
  }, [appData]);

  // ----------------------------
  // Task Actions
  // ----------------------------

  const addTask = (title) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setAppData((prev) => ({
      ...prev,
      tasks: [...prev.tasks, newTask],
    }));
  };

  const toggleTask = (id) => {
    setAppData((prev) => ({
      ...prev,
      tasks: prev.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      ),
    }));
  };

  const deleteTask = (id) => {
    setAppData((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((task) => task.id !== id),
    }));
  };

  return (
    <AppContext.Provider
      value={{
        appData,

        addTask,
        toggleTask,
        deleteTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;