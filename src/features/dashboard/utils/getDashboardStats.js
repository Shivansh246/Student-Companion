export default function getDashboardStats(appData) {
  const tasks = appData?.tasks ?? [];
  const planner = appData?.planner ?? {};
  const assignments = appData?.assignments ?? [];
  const exams = appData?.exams ?? [];

  return [
    {
      id: "tasks",
      title: "Today's Tasks",
      value: tasks.filter((task) => !task.completed).length,
      route: "/tasks",
    },
    {
      id: "planner",
      title: "Active Goals",
      value:
        (planner.yearlyGoals ?? []).length +
        (planner.monthlyGoals ?? []).length +
        (planner.weeklyGoals ?? []).length +
        (planner.dailyGoals ?? []).length,
      route: "/planner",
    },
    {
      id: "assignments",
      title: "Pending Assignments",
      value: assignments.length,
      route: "/assignments",
    },
    {
      id: "exams",
      title: "Upcoming Exams",
      value: exams.length,
      route: "/exams",
    },
  ];
}