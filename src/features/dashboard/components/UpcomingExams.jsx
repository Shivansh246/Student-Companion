import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import "./UpcomingExams.css";

function UpcomingExams() {
  const { appData } = useContext(AppContext);

  const exams = [...appData.exams]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  return (
    <section className="dashboard-widget">
      <h2>Upcoming Exams</h2>

      {exams.length === 0 ? (
        <p className="empty-state">No upcoming exams.</p>
      ) : (
        <ul className="widget-list">
          {exams.map((exam) => (
            <li key={exam.id}>
              <span>{exam.subject}</span>
              <span>{exam.date}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default UpcomingExams;