import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";

function DailyTasks() {
  return (
    <div className="page">
      <h1>Daily Tasks</h1>

      <TaskForm />

      <TaskList />
    </div>
  );
}

export default DailyTasks;