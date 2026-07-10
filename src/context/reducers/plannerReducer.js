export default function plannerReducer(state, action) {
  switch (action.type) {
    case "ADD_GOAL": {
      const { category, goal } = action.payload;

      return {
        ...state,
        [category]: [...state[category], goal],
      };
    }

    case "UPDATE_GOAL": {
      const { category, goal } = action.payload;

      return {
        ...state,
        [category]: state[category].map((item) =>
          item.id === goal.id ? goal : item
        ),
      };
    }

    case "DELETE_GOAL": {
      const { category, id } = action.payload;

      return {
        ...state,
        [category]: state[category].filter((goal) => goal.id !== id),
      };
    }

    case "TOGGLE_GOAL": {
      const { category, id } = action.payload;

      return {
        ...state,
        [category]: state[category].map((goal) =>
          goal.id === id
            ? { ...goal, completed: !goal.completed }
            : goal
        ),
      };
    }

    default:
      return state;
  }
}