import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const DishesContext = createContext({});

function DishesProvider({ children }) {
  const [dishes, setDishes] = useState([]);
  const [dishSought, setDishSought] = useState([]);

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

  async function searchDishesKeyDown(searchText) {
    const res = await api.get(`/dishes?searchText=${searchText}`);
    setDishes(res.data);
  }

  async function searchDishes(searchText) {
    const res = await api.get(`/dishes?searchText=${searchText}`);
    setDishSought(res.data);
  }

  useEffect(() => {
    getAllDishes();
  }, []);

  return (
    <DishesContext.Provider
      value={{
        getAllDishes,
        searchDishes,
        searchDishesKeyDown,
        dishes,
        dishSought,
      }}
    >
      {children}
    </DishesContext.Provider>
  );
}

function useDishes() {
  const context = useContext(DishesContext);

  return context;
}

export { DishesProvider, useDishes };
