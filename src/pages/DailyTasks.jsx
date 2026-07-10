import TaskForm from "../features/tasks/components/TaskForm";
import TaskList from "../features/tasks/components/TaskList";

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