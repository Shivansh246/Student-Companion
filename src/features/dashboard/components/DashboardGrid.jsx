import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import DashboardCard from "./DashboardCard";
import getDashboardStats from "../utils/getDashboardStats";
import "./DashboardGrid.css";

function DashboardGrid() {
  const { appData } = useContext(AppContext);

  const stats = getDashboardStats(appData);

  return (
    <section className="dashboard-grid">
      {stats.map((card) => (
        <DashboardCard key={card.id} {...card} />
      ))}
    </section>
  );
}

export default DashboardGrid;