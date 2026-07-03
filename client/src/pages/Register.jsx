import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Register.css";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const handleRegister = async () => {
        if(!name || !email || !password){
            toast.error("Please fill in all fields");
            return;
        }
        try {
            const response = await API.post("/auth/register", {
                name,
                email,
                password
            });
            toast.success(response.data.message);
            navigate("/login");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Registration Failed"
            );
        }
    };

    return (
    <div className="login-container">
        <div className="login-card">
            <img
            src="/task-icon.png"
            alt="Task Manager"
            className="logo"
            />
            <h1>Task Manager</h1>
            <h2>Create Account</h2>

            <input
                type="text"
                disabled={loading}
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                disabled={loading}
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-box">
                <input
                type={showPassword ? "text" : "password"}
                disabled={loading}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>

            
            <button onClick={handleRegister} disabled={loading}>
                {loading ? "Registering..." : "Register"}
            </button>
            <p>
                Already have an account?
                <span onClick={() => navigate("/login")}>
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Register;