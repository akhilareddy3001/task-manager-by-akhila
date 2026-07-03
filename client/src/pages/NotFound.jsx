import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center",
            }}
        >
            <h1 style={{ fontSize: "80px" }}>404</h1>

            <h2>Page Not Found</h2>

            <p>
                Sorry, the page you are looking for doesn't exist.
            </p>

            <Link to="/">
                <button
                    style={{
                        padding: "12px 25px",
                        marginTop: "20px",
                        cursor: "pointer",
                    }}
                >
                    Go Home
                </button>
            </Link>
        </div>
    );
}

export default NotFound;