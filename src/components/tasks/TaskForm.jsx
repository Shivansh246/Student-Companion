import { useState } from "react";
import useAppContext from "../../hooks/useAppContext";
import Input from "../ui/Input";
import Button from "../ui/Button";

function TaskForm() {
  const [title, setTitle] = useState("");
  const { addTask } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title.trim());
    setTitle("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <Input
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button type="submit">
        Add Task
      </Button>
    </form>
  );
}

export default TaskForm;