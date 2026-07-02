import { NavLink } from "react-router-dom";

const menuItems = [
    {
        name: "Dashboard",
        path: "/",
        icon: "🏠",
    },
    {
        name: "Planner",
        path: "/planner",
        icon: "📝",
    },
    {
        name: "Daily Tasks",
        path: "/tasks",
        icon: "✅",
    },
    {
        name: "Semester",
        path: "/semester",
        icon: "🎓",
    },
    {
        name: "Resources",
        path: "/resources",
        icon: "📚",
    },
    {
        name: "Pomodoro",
        path: "/pomodoro",
        icon: "🍅",
    },
    {
        name: "Analytics",
        path: "/analytics",
        icon: "📊",
    },
    {
        name: "Calculators",
        path: "/calculators",
        icon: "🧮",
    },
];

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <h2>Student Companion</h2>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/"}
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active-link"
                                : "nav-link"
                        }
                    >
                        <span className="nav-icon">{item.icon}</span>

                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;