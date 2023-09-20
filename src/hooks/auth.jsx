import { createContext, useContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

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

      const { isAdmin } = jwtDecode(token);

      setData({ user, token, isAdmin: !!isAdmin });

      api.defaults.headers.authorization = `Bearer ${token}`;

      return user;
    } catch (e) {
      if (e.response) {
        throw new Error(e.response.data.message);
      } else {
        throw new Error("Não foi possível entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@food-explorer:user");
    localStorage.removeItem("@food-explorer:token");
    localStorage.removeItem("@food-explorer:cart");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user");
    const token = localStorage.getItem("@food-explorer:token");

    if (!user || !token) {
      localStorage.removeItem("@food-explorer:user");
      localStorage.removeItem("@food-explorer:token");
      return;
    }

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ user: JSON.parse(user), token, isAdmin: !!isAdmin });
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user: data.user, isAdmin: data.isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
