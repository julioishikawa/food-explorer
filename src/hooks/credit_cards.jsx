import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const CreditCardsContext = createContext({});

function CreditCardsProvider({ children }) {
  const [creditCards, setCreditCards] = useState([]);

  async function getAllCreditCards() {
    try {
      async function fetchCreditCards() {
        const res = await api.get("/credit_cards");

        setCreditCards(res.data);
      }

      fetchCreditCards();
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert("Não foi possível buscar o cartão de crédito.");
      }
    }
  }

  return (
    <CreditCardsContext.Provider
      value={{
        getAllCreditCards,
        creditCards,
      }}
    >
      {children}
    </CreditCardsContext.Provider>
  );
}

function useCreditCards() {
  const context = useContext(CreditCardsContext);

  return context;
}

export { CreditCardsProvider, useCreditCards };
