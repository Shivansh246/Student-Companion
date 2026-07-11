import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard";
import Planner from "../pages/Planner";
import DailyTasks from "../pages/DailyTasks";
import Semester from "../pages/Semester";
import Resources from "../pages/Resources";
import Pomodoro from "../pages/Pomodoro";
import Analytics from "../pages/Analytics";
import Calculators from "../pages/Calculators";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />

                    <Route path="planner" element={<Planner />} />

                    <Route path="tasks" element={<DailyTasks />} />

                    <Route path="semester" element={<Semester />} />

                    <Route path="resources" element={<Resources />} />

                    <Route path="pomodoro" element={<Pomodoro />} />

                    <Route path="analytics" element={<Analytics />} />

                    <Route path="calculators" element={<Calculators />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;