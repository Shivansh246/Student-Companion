import { useState } from "react";
import ResourceForm from "../features/resources/components/ResourceForm";
import ResourceCard from "../features/resources/components/ResourceCard";

function Resources() {
  const [resources, setResources] = useState([]);

  function addResource(resource) {
    setResources((prev) => [...prev, resource]);
  }

  function deleteResource(id) {
    setResources((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  return (
    <div>
      <h1>Resource Vault</h1>

      <ResourceForm onAdd={addResource} />

      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          onDelete={deleteResource}
        />
      ))}
    </div>
  );
}

export default Resources;