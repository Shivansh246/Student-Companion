function ResourceCard({ resource, onDelete }) {
  return (
    <div className="resource-card">
      <h3>{resource.title}</h3>

      <p>{resource.category}</p>

      <a
        href={resource.link}
        target="_blank"
        rel="noreferrer"
      >
        Open Resource
      </a>

      <br />

      <button onClick={() => onDelete(resource.id)}>
        Delete
      </button>
    </div>
  );
}

export default ResourceCard;