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

  // ---------------- Tasks ----------------

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

  // ---------------- Planner ----------------

  const addGoal = (category, title) => {
    dispatch({
      type: "ADD_GOAL",
      payload: {
        category,
        goal: {
          id: crypto.randomUUID(),
          title,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      },
    });
  };

  const updateGoal = (category, goal) => {
    dispatch({
      type: "UPDATE_GOAL",
      payload: {
        category,
        goal,
      },
    });
  };

  const toggleGoal = (category, id) => {
    dispatch({
      type: "TOGGLE_GOAL",
      payload: {
        category,
        id,
      },
    });
  };

  const deleteGoal = (category, id) => {
    dispatch({
      type: "DELETE_GOAL",
      payload: {
        category,
        id,
      },
    });
  };
// ---------------- Semester ----------------
  const addSemester = (semester) => {
  dispatch({
    type: "ADD_SEMESTER",
    payload: {
      id: crypto.randomUUID(),
      ...semester,
    },
  });
};

const updateSemester = (semester) => {
  dispatch({
    type: "UPDATE_SEMESTER",
    payload: semester,
  });
};

const deleteSemester = (id) => {
  dispatch({
    type: "DELETE_SEMESTER",
    payload: id,
  });
};
  // ---------------- Settings ----------------

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

        addGoal,
        updateGoal,
        toggleGoal,
        deleteGoal,

        addSemester,
        updateSemester,
        deleteSemester,
        
        resetAppData,

      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;