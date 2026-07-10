import { useContext } from "react";
import AppContext from "../context/AppContext";
import PlannerSection from "../features/planner/components/PlannerSection";
import plannerCategories from "../features/planner/data/plannerCategories";
import "./Planner.css";

export default function Planner() {
  const { appData } = useContext(AppContext);

  return (
    <div className="planner-page">
      <h1>Planner</h1>

      <div className="planner-grid">
        {plannerCategories.map((category) => (
          <PlannerSection
            key={category.key}
            title={category.title}
            category={category.key}
            goals={appData.planner[category.key]}
          />
        ))}
      </div>
    </div>
  );
}