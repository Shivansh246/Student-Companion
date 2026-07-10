import { useState } from "react";
import useAppContext from "../../../hooks/useAppContext.js";
import Input from "../../../components/ui/Input.jsx";
import Button from "../../../components/ui/Button.jsx";

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