import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiGithub, FiLogOut } from "react-icons/fi";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Input } from "../Input";
import { Note } from "../Note";

import polygon from "../../assets/Polygon.svg";
import footerLogo from "../../assets/Polygon-footer.svg";
import messages from "../../assets/Messages.png";

import { Container, Menu, Logo, Messages } from "./styles";

export function Header() {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [orders, setOrders] = useState([]);
  const [click, setClick] = useState(false);
  const [notification, setNotification] = useState(false);

  const handleClickMobileMenu = () => setClick(!click);
  const closeMobileMenu = () => setClose(false);

  const handleClickNotifications = () => setNotification(!notification);

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchOrders() {
      const res = await api.get(`/orders?name=${search}&title=${ingredients}`);

      setOrders(res.data);
    }

    fetchOrders();
  }, [search, ingredients]);

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
              <Input
                id="search-mobile"
                placeholder="Busque por pratos ou ingredientes"
                icon={FiSearch}
                onChange={(e) => {
                  setSearch(e.target.value), setIngredients(e.target.value);
                }}
              />
            </li>

            {search.length > 0 && search != "" && (
              <li className="nav-item">
                {orders.map((order) => (
                  <Note
                    key={String(order.id)}
                    data={order}
                    onClick={() => handleDetails(order.id)}
                  />
                ))}
              </li>
            )}

            {user.isAdmin === 1 && (
              <li className="nav-item">
                <Link
                  to="/neworder"
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

      <Logo className>
        <div className="logo">
          <img src={polygon} alt="food explorer logo" />
          <h1>food explorer</h1>
        </div>

        {user.isAdmin === 1 && <p>admin</p>}
      </Logo>

      <div className="search-wrapper">
        <Input
          id="search"
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
          onChange={(e) => {
            setSearch(e.target.value), setIngredients(e.target.value);
          }}
        />

        {search.length > 0 && (
          <div className="notes-wrapper">
            <div className="notes">
              {orders.map((order) => (
                <Note
                  key={String(order.id)}
                  data={order}
                  onClick={() => handleDetails(order.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <Messages>
        {user.isAdmin === 1 && (
          <Link to="/neworder">
            <button className="new-order">Novo prato</button>
          </Link>
        )}

        {user.isAdmin === 0 && (
          <div className="menu-orders" onClick={handleClickNotifications}>
            <img src={messages} alt="Imagem ilustrativa de uma comanda" />
            <span className="notifications">0</span>
          </div>
        )}

        {user.isAdmin === 0 && (
          <button className="orders" onClick={handleClickNotifications}>
            <img src={messages} alt="Imagem ilustrativa de uma comanda" />
            Pedidos ({orders.quantity})
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
