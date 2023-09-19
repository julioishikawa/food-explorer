import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const OrderContext = createContext({});

function OrdersProvider({ children }) {
  const [data, setData] = useState([]);

  async function getOrders() {
    try {
      async function fetchOrders() {
        const res = await api.get("/orders");

        setData(res.data);
      }

      fetchOrders();
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert("Não foi possível buscar o pedido.");
      }
    }
  }

  async function updateOrder({ orders, imageFile }) {
    try {
      if (imageFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("image", imageFile);

        const response = await api.patch("/orders/image", fileUploadForm);
        orders.image = response.data.image;
      }

      await api.put("/orders", orders);

      setData({ orders });
      alert("Pedido atualizado!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil.");
      }
    }
  }

  return (
    <OrderContext.Provider value={{ getOrders, updateOrder, orders: data }}>
      {children}
    </OrderContext.Provider>
  );
}

function useOrder() {
  const context = useContext(OrderContext);

  return context;
}

export { OrdersProvider, useOrder };
