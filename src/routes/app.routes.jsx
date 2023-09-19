import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewOrder } from "../pages/NewOrder";
import { EditOrder } from "../pages/EditOrder";
import { Cart } from "../pages/Cart";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/neworder" element={<NewOrder />} />
      <Route path="/editorder/:id" element={<EditOrder />} />
      <Route path="/shoppingcart" element={<Cart />} />
    </Routes>
  );
}
