export default function assignmentReducer(state, action) {
  switch (action.type) {
    case "ADD_ASSIGNMENT":
      return [...state, action.payload];

    case "UPDATE_ASSIGNMENT":
      return state.map((assignment) =>
        assignment.id === action.payload.id
          ? action.payload
          : assignment
      );

    case "DELETE_ASSIGNMENT":
      return state.filter(
        (assignment) => assignment.id !== action.payload
      );

    default:
      return state;
  }
}