import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav("/");
  };

  return (
    <header style={{ padding: "10px", background: "#222", color: "white", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h1>SyberShare</h1>
        </Link>
      </div>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        {user ? (
          <>
            <Link to="/write" style={{ color: "white" }}>Write</Link>
            <span>Hi, <b>{user.username}</b></span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: "white" }}>Login</Link>
            <Link to="/register" style={{ color: "white" }}>Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
