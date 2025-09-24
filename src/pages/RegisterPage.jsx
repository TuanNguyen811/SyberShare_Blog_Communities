import { useState } from "react";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    register(form); // mock
    nav("/");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <div><label>Username: </label>
          <input name="username" value={form.username} onChange={change} />
        </div>
        <div><label>Email: </label>
          <input type="email" name="email" value={form.email} onChange={change} />
        </div>
        <div><label>Password: </label>
          <input type="password" name="password" value={form.password} onChange={change} />
        </div>
        <button type="submit">Create account</button>
      </form>
    </div>
  );
}
