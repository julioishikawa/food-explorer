import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiGithub, FiLogOut } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";
import { useDishes } from "../../hooks/dishes";
import { useCart } from "../../hooks/cart";

import { Note } from "../Note";
import { InputSearch } from "../InputSearch";
import { ProductItem } from "../ProductItem";

import polygon from "../../assets/Polygon.svg";
import footerLogo from "../../assets/Polygon-footer.svg";
import orderImage from "../../assets/order.svg";

import { Container, Menu, Logo, Cart } from "./styles";

export function Header() {
  const { isAdmin, signOut } = useAuth();
  const { dishSought, getAllDishes, searchDishes, searchDishesKeyDown } =
    useDishes();
  const { cart, removeFromCart, getCartTotalItems } = useCart();

  const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const [order, setOrder] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [totalCartItems, setTotalCartItems] = useState(0);

  const handleClickMobileMenu = () => setClick(!click);
  const closeMobileMenu = () => setClose(false);

  const handleClickDishes = () => setOrder(!order);

  async function handleBackHome() {
    await getAllDishes();
    navigate("/");
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleSearch(event) {
    if (event.key === "Enter") {
      searchDishesKeyDown(searchText);
      setSearchText("");
      event.target.value = "";

      if (window.location.pathname !== "/") {
        navigate("/");
      }
    }
  }

  useEffect(() => {
    searchDishes(searchText);
  }, [searchText]);

  useEffect(() => {
    setTotalCartItems(getCartTotalItems());
  });

  return (
    <Container>
      <Menu>
        <div className="menu-item" onClick={handleClickMobileMenu}>
          <FiMenu />
        </div>

        <div className={click ? "nav-menu active" : "nav-menu"}>
          <ul>
            <li className="menu-logo">
              <FiX onClick={handleClickMobileMenu} />
              <h2>Menu</h2>
            </li>

            <li className="nav-item">
              <InputSearch
                id="search-mobile"
                placeholder="Busque por pratos ou ingredientes"
                icon={FiSearch}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
            </li>

            {searchText.length > 0 && searchText != "" && (
              <li id="mobile-search" className="nav-item">
                {dishSought.map((dish) => (
                  <Note
                    key={String(dish.id)}
                    data={dish}
                    onClick={() => handleDetails(dish.id)}
                  />
                ))}
              </li>
            )}

            {!isAdmin && (
              <li className="nav-item">
                <Link to="/favorites" className="nav-links">
                  Meus favoritos
                </Link>
              </li>
            )}

            {isAdmin && (
              <li className="nav-item">
                <Link
                  to="/newdish"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Novo prato
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={signOut}>
                Sair
              </Link>
            </li>

            <li className="nav-item">
              <Link
                target="_blank"
                to="https://github.com/shuharib0t"
                className="nav-links"
              >
                Feito por shuharib0t
                <FiGithub />
              </Link>
            </li>
          </ul>

          <footer>
            <Logo>
              <img src={footerLogo} alt="food explorer logo" />
              <h1>food explorer</h1>
            </Logo>

            <p>© 2023 - Todos os direitos reservados.</p>
          </footer>
        </div>
      </Menu>

      <Logo onClick={handleBackHome}>
        <div className="logo">
          <img src={polygon} alt="food explorer logo" />
          <h1>food explorer</h1>
        </div>

        {isAdmin && <p>admin</p>}
      </Logo>

      <div className="search-wrapper">
        <InputSearch
          id="search"
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyUp={handleSearch}
        />

        {searchText.length > 0 && (
          <div className="notes-wrapper">
            {dishSought.map((dish) => (
              <Note
                key={String(dish.id)}
                data={dish}
                onClick={() => handleDetails(dish.id)}
              />
            ))}
          </div>
        )}
      </div>

      <Cart>
        {!isAdmin && (
          <Link className="favorites-btn" to="/favorites">
            Meus favoritos
          </Link>
        )}

        {isAdmin && (
          <Link to="/newdish">
            <button className="new-dish">Novo prato</button>
          </Link>
        )}

        {!isAdmin && (
          <div className="menu-dishes" onClick={handleClickDishes}>
            <img src={orderImage} alt="Imagem ilustrativa de uma comanda" />
            <span className="dishes">{totalCartItems}</span>
          </div>
        )}

        {!isAdmin && (
          <button className="dishes-wrapper" onClick={handleClickDishes}>
            <img src={orderImage} alt="Imagem ilustrativa de uma comanda" />
            Pedidos ({totalCartItems})
          </button>
        )}

        <div className={order ? "nav-dishes active" : "nav-dishes"}>
          <div className="cart-logo">
            <FiX onClick={handleClickDishes} />
            <h2>Carrinho</h2>
          </div>

          <ul className="cart-list">
            {cart.map((product) => (
              <ProductItem
                id={product.id}
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                buttonText="Remover"
                onClick={() => {
                  removeFromCart(product.id);
                }}
              />
            ))}

            <li className="cart-item">
              <Link to="/cart" className="cart-links">
                Fechar pedido
              </Link>
            </li>
          </ul>
        </div>
      </Cart>

      <Link to="/" className="logout" onClick={signOut}>
        <FiLogOut />
      </Link>
    </Container>
  );
}
