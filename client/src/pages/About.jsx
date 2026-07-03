import Navbar from "../components/Navbar";
import "./About.css";

function About() {
    return (
        <>
            <Navbar />

            <div className="about-container">

                <h1>About Task Manager</h1>

                <p className="about-text">
                    Task Manager is a secure MERN Stack application
                    that helps users organize their daily work,
                    manage priorities and improve productivity.
                </p>

                <div className="tech-section">

                    <h2>Technologies Used</h2>

                    <div className="tech-grid">

                        <div className="tech-card">⚛️ React</div>
                        <div className="tech-card">🟢 Node.js</div>
                        <div className="tech-card">🚀 Express.js</div>
                        <div className="tech-card">🍃 MongoDB</div>
                        <div className="tech-card">🔐 JWT Authentication</div>
                        <div className="tech-card">📡 REST API</div>

                    </div>

                </div>

                <div className="features-section">

                    <h2>Features</h2>

                    <ul>
                        <li>✅ User Authentication</li>
                        <li>✅ Secure Login & Register</li>
                        <li>✅ Create, Update & Delete Tasks</li>
                        <li>✅ Search & Filter Tasks</li>
                        <li>✅ Export Tasks to PDF</li>
                        <li>✅ Dark Mode</li>
                        <li>✅ Progress Tracking</li>
                    </ul>

                </div>

            </div>
        </>
    );
}

export default About;