import { Link,useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar(){
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    return(
        <nav>
            <h2>📋 Task Manager</h2>
            <ul>
                <li>
                    <Link to ="/">🏠 Home</Link></li>
                <li>
                    <Link to = "/tasks">📋 Tasks</Link></li>
                <li>
                    <Link to ="/about">ℹ️ About</Link></li>
                <li>
                    <Link to ="/contact">📞 Contact</Link></li>

                <li>
                    <button onClick={handleLogout} className="logout-btn">🚪 Logout</button></li>
            </ul>
        </nav>
    );
}
export default Navbar;