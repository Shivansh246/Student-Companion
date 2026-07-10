import { useContext, useState } from "react";
import AppContext from "../../../context/AppContext";
import "./PlannerSection.css";

export default function PlannerSection({ title, category, goals }) {
  const {
    addGoal,
    updateGoal,
    deleteGoal,
    toggleGoal,
  } = useContext(AppContext);

  const [input, setInput] = useState("");

  const handleAdd = () => {
    const value = input.trim();

    if (!value) return;

    addGoal(category, value);
    setInput("");
  };

  return (
    <div className="planner-section">
      <h2>{title}</h2>

      <div className="planner-input">
        <input
          type="text"
          placeholder="Enter goal..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="planner-list">
        {goals.map((goal) => (
          <div className="planner-item" key={goal.id}>
            <input
              type="checkbox"
              checked={goal.completed}
              onChange={() => toggleGoal(category, goal.id)}
            />

            <input
              className="planner-title"
              value={goal.title}
              onChange={(e) =>
                updateGoal(category, {
                  ...goal,
                  title: e.target.value,
                })
              }
            />

            <button onClick={() => deleteGoal(category, goal.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}