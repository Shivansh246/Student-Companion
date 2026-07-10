import DashboardGrid from "../features/dashboard/components/DashboardGrid";
import UpcomingAssignments from "../features/dashboard/components/UpcomingAssignments";
import UpcomingExams from "../features/dashboard/components/UpcomingExams";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's an overview of your academic progress.</p>
      </div>

      <DashboardGrid />

      <div className="dashboard-widgets">
        <UpcomingAssignments />
        <UpcomingExams />
      </div>
    </div>
  );
}

export default Dashboard;