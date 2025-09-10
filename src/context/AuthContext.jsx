import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {id, username, email}

  // persist login (optional)
  useEffect(() => {
    const saved = localStorage.getItem("ss_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);
  useEffect(() => {
    if (user) localStorage.setItem("ss_user", JSON.stringify(user));
    else localStorage.removeItem("ss_user");
  }, [user]);

  const login = ({ email, password }) => {
    // mock login: pass bất kỳ -> nhận user giả
    setUser({ id: "u1", username: email.split("@")[0], email });
  };

  const register = ({ username, email, password }) => {
    // mock register -> auto login
    setUser({ id: "u2", username, email });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
