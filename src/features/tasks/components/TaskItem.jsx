import useAppContext from "../../../hooks/useAppContext";

function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useAppContext();

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      <span
        className={
          task.completed ? "completed-task" : ""
        }
      >
        {task.title}
      </span>

      <button
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;