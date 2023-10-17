import { Routes, Route } from "react-router-dom";

import { useAuth } from "../hooks/auth";
import { DishesProvider } from "../hooks/dishes";
import { CartProvider } from "../hooks/cart";
import { FavoritesProvider } from "../hooks/favorites";
import { CreditCardsProvider } from "../hooks/credit_cards";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Favorites } from "../pages/Favorites";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";
import { Cart } from "../pages/Cart";

export function AppRoutes() {
  const { isAdmin } = useAuth();

  return (
    <DishesProvider>
      <CreditCardsProvider>
        <CartProvider>
          <FavoritesProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:id" element={<Details />} />
              {!isAdmin && <Route path="/favorites" element={<Favorites />} />}
              {!isAdmin && <Route path="/cart" element={<Cart />} />}
              {!isAdmin && <Route path="/cart/:id" element={<Cart />} />}
              {isAdmin && <Route path="/newdish" element={<NewDish />} />}
              {isAdmin && <Route path="/editdish/:id" element={<EditDish />} />}
            </Routes>
          </FavoritesProvider>
        </CartProvider>
      </CreditCardsProvider>
    </DishesProvider>
  );
}
