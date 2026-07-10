import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import "./UpcomingAssignments.css";

function UpcomingAssignments() {
  const { appData } = useContext(AppContext);

  const assignments = [...appData.assignments]
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 5);

  return (
    <section className="dashboard-widget">
      <h2>Upcoming Assignments</h2>

      {assignments.length === 0 ? (
        <p className="empty-state">No pending assignments.</p>
      ) : (
        <ul className="widget-list">
          {assignments.map((assignment) => (
            <li key={assignment.id}>
              <span>{assignment.title}</span>
              <span>{assignment.dueDate}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default UpcomingAssignments;