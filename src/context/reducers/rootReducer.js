import taskReducer from "./taskReducer";
import plannerReducer from "./plannerReducer";
import semesterReducer from "./semesterReducer";
import assignmentReducer from "./assignmentReducer";
import examReducer from "./examReducer";
import resourceReducer from "./resourceReducer";
import marksReducer from "./marksReducer";
import initialState from "../../data/initialState";

export default function rootReducer(state, action) {
  switch (action.type) {
    case "RESET_APP":
      return initialState;

    default:
      return {
        ...state,
        tasks: taskReducer(state.tasks, action),
        planner: plannerReducer(state.planner, action),
        semester: semesterReducer(state.semester, action),
        assignments: assignmentReducer(state.assignments, action),
        exams: examReducer(state.exams, action),
        resources: resourceReducer(state.resources, action),
        marks: marksReducer(state.marks, action),
      };
  }
}