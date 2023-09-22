import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const DishesContext = createContext({});

function DishesProvider({ children }) {
  const [dishes, setDishes] = useState([]);

  async function getAllDishes() {
    try {
      async function fetchDishes() {
        const res = await api.get("/dishes");

        setDishes(res.data);
      }

      fetchDishes();
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert("Não foi possível buscar o prato.");
      }
    }
  }

  async function searchDishes(searchText) {
    await api.get(`/dishes?searchText=${searchText}`);
    setDishes(data);
  }

  useEffect(() => {
    getAllDishes();
  }, []);

  return (
    <DishesContext.Provider value={{ getAllDishes, searchDishes, dishes }}>
      {children}
    </DishesContext.Provider>
  );
}

function useDishes() {
  const context = useContext(DishesContext);

  return context;
}

export { DishesProvider, useDishes };
