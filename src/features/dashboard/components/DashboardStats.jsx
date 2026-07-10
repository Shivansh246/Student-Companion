import useAppContext from "../../../hooks/useAppContext";
import SummaryCard from "./SummaryCard";

function DashboardStats() {
  const { appData } = useAppContext();

  const totalTasks = appData.tasks.length;

  const completedTasks = appData.tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const totalAssignments = appData.assignments.length;

  const totalExams = appData.exams.length;

  const totalResources = appData.resources.length;

  return (
    <div className="dashboard-grid">
      <SummaryCard
        title="Total Tasks"
        value={totalTasks}
      />

      <SummaryCard
        title="Completed"
        value={completedTasks}
      />

      <SummaryCard
        title="Pending"
        value={pendingTasks}
      />

      <SummaryCard
        title="Assignments"
        value={totalAssignments}
      />

      <SummaryCard
        title="Exams"
        value={totalExams}
      />

      <SummaryCard
        title="Resources"
        value={totalResources}
      />
    </div>
  );
}

export default DashboardStats;