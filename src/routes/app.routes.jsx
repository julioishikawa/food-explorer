import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";
import { Cart } from "../pages/Cart";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/newdish" element={<NewDish />} />
      <Route path="/editdish/:id" element={<EditDish />} />
      <Route path="/shoppingcart" element={<Cart />} />
    </Routes>
  );
}
