import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@food-explorer:user", JSON.stringify(user));
      localStorage.setItem("@food-explorer:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@food-explorer:user");
    localStorage.removeItem("@food-explorer:token");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user");
    const token = localStorage.getItem("@food-explorer:token");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
    }

    setData({ user: JSON.parse(user), token });
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
