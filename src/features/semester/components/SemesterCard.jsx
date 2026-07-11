import "./SemesterCard.css";

function SemesterCard({ semester,onEdit,
  onDelete, }) {
  const totalCredits = semester.subjects.reduce(
    (sum, subject) => sum + Number(subject.credits || 0),
    0
  );

  return (
    <div className="semester-card">
      <div className="semester-card__header">
        <h3>{semester.name}</h3>
        <span>{semester.subjects.length} Subjects</span>
      </div>

      <div className="semester-card__body">
        <div className="semester-info">
          <span>Total Credits</span>
          <strong>{totalCredits}</strong>
        </div>

        <div className="semester-info">
          <span>Assignments</span>
          <strong>{semester.assignments.length}</strong>
        </div>

        <div className="semester-info">
          <span>Exams</span>
          <strong>{semester.exams.length}</strong>
        </div>
      </div>

      <div className="semester-card__footer">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default SemesterCard;