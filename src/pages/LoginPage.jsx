import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    login({ email, password });   // mock
    nav("/");                     // về Home
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div><label>Email: </label>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div><label>Password: </label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
