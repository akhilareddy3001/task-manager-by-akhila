import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav>
            <h2>📋 Task Manager</h2>

            {/* Hamburger Button */}
            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "✖" : "☰"}
            </button>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        🏠 Home
                    </Link>
                </li>

                <li>
                    <Link to="/tasks" onClick={() => setMenuOpen(false)}>
                        📋 Tasks
                    </Link>
                </li>

                <li>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>
                        ℹ️ About
                    </Link>
                </li>

                <li>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>
                        📞 Contact
                    </Link>
                </li>

                <li>
                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        🚪 Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;