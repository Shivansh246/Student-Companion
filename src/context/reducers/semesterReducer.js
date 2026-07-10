export default function semesterReducer(state, action) {
  switch (action.type) {
    case "ADD_SEMESTER":
      return {
        ...state,
        semesters: [...state.semesters, action.payload],
      };

    case "UPDATE_SEMESTER":
      return {
        ...state,
        semesters: state.semesters.map((semester) =>
          semester.id === action.payload.id
            ? action.payload
            : semester
        ),
      };

    case "DELETE_SEMESTER":
      return {
        ...state,
        semesters: state.semesters.filter(
          (semester) => semester.id !== action.payload
        ),
      };

    default:
      return state;
  }
}