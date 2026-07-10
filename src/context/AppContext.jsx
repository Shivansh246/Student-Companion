import { createContext, useEffect, useReducer } from "react";
import initialState from "../data/initialState";
import rootReducer from "./reducers/rootReducer";
import { loadData, saveData } from "../utils/localStorage";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [appData, dispatch] = useReducer(
  rootReducer,
  undefined,
  () => loadData() ?? initialState
);

  useEffect(() => {
    saveData(appData);
  }, [appData]);

  const addTask = (title) => {
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: crypto.randomUUID(),
        title,
        completed: false,
        createdAt: new Date().toISOString(),
      },
    });
  };

  const toggleTask = (id) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };
  const updateTask = (task) => {
  dispatch({
    type: "UPDATE_TASK",
    payload: task,
  });
};

const resetAppData = () => {
  dispatch({
    type: "RESET_APP",
  });
};

  return (
   <AppContext.Provider
  value={{
    appData,
    dispatch,

    addTask,
    updateTask,
    toggleTask,
    deleteTask,
    resetAppData,
  }}
>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;