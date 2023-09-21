import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const FavoritesContext = createContext({});

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  async function getFavorites() {
    const { data } = await api.get("/favorites");
    setFavorites(data);
  }

  async function addFavorite(id) {
    try {
      await api.post(`/favorites/${id}`);
      await getFavorites();
    } catch (e) {
      console.log(e);
    }
  }

  async function removeFavorite(id) {
    try {
      await api.delete(`/favorites/${id}`);
      await getFavorites();
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  const context = useContext(FavoritesContext);

  return context;
}

export { FavoritesProvider, useFavorites };
