function Navbar() {
    // Get the current date in a readable format
    const currentDate = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <header className="navbar">
            <div className="navbar-left">
                <h1 className="page-title">Student Companion</h1>
            </div>

            <div className="navbar-right">
                <span className="current-date">
                    {currentDate}
                </span>
            </div>
        </header>
    );
}

export default Navbar;