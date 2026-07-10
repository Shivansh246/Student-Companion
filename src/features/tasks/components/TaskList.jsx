import useAppContext from "../../../hooks/useAppContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { appData } = useAppContext();

  if (appData.tasks.length === 0) {
    return <p>No tasks available.</p>;
  }

  return (
    <div>
      {appData.tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}

export default TaskList;