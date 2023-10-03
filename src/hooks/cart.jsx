import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function updateLocalStorage(newCart) {
    localStorage.setItem("@food-explorer:cart", JSON.stringify(newCart));
  }

  function addToCart({ id, title, price, image, quantity }) {
    const product = cart.find((item) => item.id === id);

    if (product) {
      product.quantity += quantity;
      setCart([...cart]);
      updateLocalStorage([...cart]);
    } else {
      setCart([...cart, { id, title, price, image, quantity }]);
      updateLocalStorage([...cart, { id, title, price, image, quantity }]);
    }
  }

  function removeFromCart(id) {
    const newCart = cart.filter((item) => item.id !== id);

    setCart(newCart);
    updateLocalStorage(newCart);
  }

  function getCartTotalItems() {
    if (!cart.length) {
      return 0;
    }

    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  function getCartTotalPrice() {
    if (!cart.length) {
      return 0;
    }

    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  useEffect(() => {
    const cart = localStorage.getItem("@food-explorer:cart");

    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getCartTotalItems,
        getCartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };
