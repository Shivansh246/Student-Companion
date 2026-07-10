import initialState from "../data/initialState";
import deepMerge from "./deepMerge";

const STORAGE_KEY = "student-companion-data";

export const loadData = () => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (!savedData) {
      return initialState;
    }

    return deepMerge(initialState, JSON.parse(savedData));
  } catch (error) {
    console.error("Failed to load data:", error);
    return initialState;
  }
};

export const saveData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save data:", error);
  }
};