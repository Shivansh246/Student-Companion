import { Link } from "react-router-dom";
import "./DashboardCard.css";

function DashboardCard({ title, value, route }) {
  return (
    <Link to={route} className="dashboard-card">
      <div className="dashboard-card__content">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </Link>
  );
}

export default DashboardCard;