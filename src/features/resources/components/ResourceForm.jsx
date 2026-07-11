import { useState } from "react";
import { RESOURCE_CATEGORIES } from "../constants";

function ResourceForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("Books");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !link.trim()) return;

    onAdd({
      id: Date.now(),
      title,
      link,
      category,
    });

    setTitle("");
    setLink("");
    setCategory("Books");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Resource Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="url"
        placeholder="https://..."
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {RESOURCE_CATEGORIES.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

      <button type="submit">Add Resource</button>
    </form>
  );
}

export default ResourceForm;