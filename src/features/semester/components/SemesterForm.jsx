import { useEffect, useState } from "react";
import "./SemesterForm.css";

const initialForm = {
  name: "",
  startDate: "",
  endDate: "",
};

function SemesterForm({
  initialData = null,
  onSubmit,
  onCancel,
}) {
  const [formData, setFormData] = useState(initialForm);
  

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData(initialForm);
    }
  }, [initialData]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name.trim()) {
      return;
    }

    onSubmit(formData);

    setFormData(initialForm);
  }

  return (
    <form
      className="semester-form"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label>Semester Name</label>

        <input
          type="text"
          name="name"
          placeholder="Example: Semester 5"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Start Date</label>

        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>End Date</label>

        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>

        <button type="submit">
          {initialData ? "Save Changes" : "Create Semester"}
        </button>
      </div>
    </form>
  );
}

export default SemesterForm;