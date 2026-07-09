const STORAGE_KEY = "student-companion-data";

export const loadData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return {
        planner: [],
        tasks: [],
        resources: [],
        semesters: [],
        exams: [],
        assignments: [],
        marks: [],
      };
    }

    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading LocalStorage:", error);

    return {
      planner: [],
      tasks: [],
      resources: [],
      semesters: [],
      exams: [],
      assignments: [],
      marks: [],
    };
  }
};

export const saveData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving LocalStorage:", error);
  }
};