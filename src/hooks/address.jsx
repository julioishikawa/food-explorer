import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const AddressContext = createContext({});

export function AddressProvider({ children }) {
  const [addresses, setAddresses] = useState([]);

  async function getAllAddresses() {
    try {
      async function fetchAddresses() {
        const res = await api.get("/address");

        setAddresses(res.data);
      }

      fetchAddresses();
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert("Não foi possível buscar o endereço.");
      }
    }
  }

  return (
    <AddressContext.Provider value={{ getAllAddresses, addresses }}>
      {children}
    </AddressContext.Provider>
  );
}

export const useAddress = () => useContext(AddressContext);
