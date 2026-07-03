import Navbar from "../components/Navbar";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <div className="hero">

                <h1>📋 Task Manager</h1>

                <p>
                    Organize your daily work, stay productive,
                    and never miss an important task.
                </p>
                <p className="hero-subtitle">
                    A secure and user-friendly MERN Stack application
                    designed to help you manage your tasks efficiently.
                </p>

                <div className="hero-buttons">
                    <button
                        className="primary-btn"
                        onClick={() => navigate("/tasks")}
                    >
                        Get Started
                    </button>

                    <button
                        className="secondary-btn"
                        onClick={() => navigate("/about")}
                    >
                        Learn More
                    </button>
                </div>
            </div>

            <div className="features">

                <h2>Why Choose Task Manager?</h2>

                <div className="feature-grid">

                    <div className="feature-card">
                        <h3>🔒 Secure Login</h3>
                        <p>JWT Authentication keeps your account safe.</p>
                    </div>

                    <div className="feature-card">
                        <h3>📋 Task Management</h3>
                        <p>Create, edit, delete and organize your tasks.</p>
                    </div>

                    <div className="feature-card">
                        <h3>📄 Export PDF</h3>
                        <p>Download all your tasks as a PDF report.</p>
                    </div>

                    <div className="feature-card">
                        <h3>🌙 Dark Mode</h3>
                        <p>Switch between light and dark themes anytime.</p>
                    </div>

                    <div className="feature-card">
                        <h3>🔍 Search & Filter</h3>
                        <p>Quickly find the tasks you need.</p>
                    </div>

                    <div className="feature-card">
                        <h3>📊 Progress Tracking</h3>
                        <p>Track completed and pending tasks easily.</p>
                    </div>

                </div>

            </div>

            <footer className="footer">
                <p>Built with React • Node.js • Express • MongoDB</p>
                <p>© 2026 Task Manager | Developed by Akhila</p>
            </footer>

        </>
    );
}

export default Home;