import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async () => {
        if(!email || !password){
            toast.error("Please fill in all fields");
            return;
        }
        try {
            setLoading(true);   // Start loading
            const response = await API.post("/auth/login", {
                email,
                password
            });
            localStorage.setItem("token", response.data.token);
            toast.success(response.data.message);
            navigate("/tasks");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Login Failed"
            );
        } finally {
            setLoading(false);   // Stop loading
            }
    };

    return (
    <div className="login-container">
        <div className="login-card">
            <h1>📋 Task Manager</h1>
            <h2>Welcome Back!</h2>
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
            <button className="login-btn"
            onClick={handleLogin}
            disabled={loading}>
                {loading ? "Logging in..." : "Login"}
            </button>
                <p>
                    Don't have an account?
                    <span onClick={() => navigate("/register")}>
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;