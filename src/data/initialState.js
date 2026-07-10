const initialState = {
  tasks: [],

  planner: {
    yearlyGoals: [],
    monthlyGoals: [],
    weeklyGoals: [],
    dailyGoals: [],
  },

  semester: {
    currentSemester: "",
    semesters: [],  
  },

  assignments: [],

  exams: [],

  resources: [],

  marks: {
    subjectMarks: [],
  },

  pomodoro: {
    workDuration: 25,
    shortBreak: 5,
    longBreak: 15,
    completedSessions: 0,
  },

  analytics: {
    studyHours: [],
    productivity: [],
  },

  settings: {
    theme: "light",
  },
};

export default initialState;