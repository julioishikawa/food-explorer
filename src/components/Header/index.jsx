import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiGithub, FiLogOut } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";
import { useDishes } from "../../hooks/dishes";

import { Note } from "../Note";
import { InputSearch } from "../InputSearch";

import polygon from "../../assets/Polygon.svg";
import footerLogo from "../../assets/Polygon-footer.svg";
import messages from "../../assets/Messages.png";

import { Container, Menu, Logo, Messages } from "./styles";

export function Header() {
  const { isAdmin, signOut } = useAuth();
  const { getAllDishes, searchDishes } = useDishes();

  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [dishes, setDishes] = useState([]);
  const [click, setClick] = useState(false);
  const [notification, setNotification] = useState(false);

  const handleClickMobileMenu = () => setClick(!click);
  const closeMobileMenu = () => setClose(false);

  const handleClickNotifications = () => setNotification(!notification);

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleSearch(event) {
    if (event.key === "Enter") {
      searchDishes(searchText);
      setSearchText("");
      event.target.value = "";
    }
  }

  async function handleBackHome() {
    await getAllDishes();
    navigate("/");
  }

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
                  setSearch(e.target.value), setIngredients(e.target.value);
                }}
              />
            </li>

            {searchText.length > 0 && searchText != "" && (
              <li className="nav-item">
                {dishes.map((dish) => (
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
            <div className="notes">
              {dishes.map((dish) => (
                <Note
                  key={String(dish.id)}
                  data={dish}
                  onClick={() => handleDetails(dish.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {!isAdmin && (
        <Link to="/favorites" className="favorites-btn">
          Meus favoritos
        </Link>
      )}

      <Messages>
        {isAdmin && (
          <Link to="/newdish">
            <button className="new-order">Novo prato</button>
          </Link>
        )}

        {!isAdmin && (
          <div className="menu-orders" onClick={handleClickNotifications}>
            <img src={messages} alt="Imagem ilustrativa de uma comanda" />
            <span className="notifications">0</span>
          </div>
        )}

        {!isAdmin && (
          <button className="orders" onClick={handleClickNotifications}>
            <img src={messages} alt="Imagem ilustrativa de uma comanda" />
            Pedidos ({dishes.quantity})
          </button>
        )}

        <div
          className={
            notification ? "nav-notifications active" : "nav-notifications"
          }
        >
          <ul>
            <li className="notification-logo">
              <FiX onClick={handleClickNotifications} />
              <h2>Carrinho</h2>
            </li>

            <li className="notification-item">
              <Link
                target="_blank"
                to="https://github.com/shuharib0t"
                className="notification-links"
              >
                testando
              </Link>
            </li>
          </ul>
        </div>
      </Messages>

      <Link to="/" onClick={signOut}>
        <FiLogOut className="logout" />
      </Link>
    </Container>
  );
}
