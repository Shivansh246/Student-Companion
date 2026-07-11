export default function resourceReducer(resources, action) {
  switch (action.type) {
    case "ADD_RESOURCE":
      return [...resources, action.payload];

    case "UPDATE_RESOURCE":
      return resources.map((resource) =>
        resource.id === action.payload.id ? action.payload : resource
      );

    case "DELETE_RESOURCE":
      return resources.filter(
        (resource) => resource.id !== action.payload
      );

    default:
      return resources;
  }
}