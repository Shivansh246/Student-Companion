import { useContext, useState } from "react";

import AppContext from "../../context/AppContext";

import PageHeader from "../../components/ui/PageHeader";
import Button from "../../components/ui/Button";
import EmptyState from "../../components/ui/EmptyState";

import SemesterCard from "./components/SemesterCard";
import SemesterForm from "./components/SemesterForm";

function SemesterSection() {
  const {
  appData,
  addSemester,
  updateSemester,
} = useContext(AppContext);

  const [showForm, setShowForm] = useState(false);
  const [editingSemester, setEditingSemester] = useState(null);

  function handleCreateSemester(data) {
    addSemester(data);

    setShowForm(false);
  }

  function handleUpdateSemester(data) {
    updateSemester({
  ...editingSemester,
  ...data,
});

    setEditingSemester(null);
    setShowForm(false);
  }

  return (
    <div className="page-container">
      <PageHeader
        title="Semester Manager"
        subtitle="Organize semesters, subjects, credits and academic progress."
        actions={
          <Button onClick={() => setShowForm(true)}>
            + Add Semester
          </Button>
        }
      />

      {showForm && (
        <SemesterForm
          initialData={editingSemester}
          onSubmit={
            editingSemester
              ? handleUpdateSemester
              : handleCreateSemester
          }
          onCancel={() => {
            setEditingSemester(null);
            setShowForm(false);
          }}
        />
      )}

      {appData.semester.semesters.length === 0 ? (
        <EmptyState
          title="No Semester Added"
          description="Create your first semester."
        />
      ) : (
        <div className="semester-grid">
          {appData.semester.semesters.map((semester) => (
            <SemesterCard
              key={semester.id}
              semester={semester}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SemesterSection;