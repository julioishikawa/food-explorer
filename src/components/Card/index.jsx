import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";
import { useFavorites } from "../../hooks/favorites";
import { useCart } from "../../hooks/cart";

import { api } from "../../services/api";

import { Button } from "../Button";
import { Heart } from "../Heart";
import { QuantityCounter } from "../QuantityCounter";

import { Container, Content } from "./styles";

export function Card({ id, title, description, price, image }) {
  const { isAdmin } = useAuth();

  const { addToCart } = useCart();

  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const cardImage = `${api.defaults.baseURL}/files/${image}`;

  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

  const navigate = useNavigate();

  async function handleFavorite() {
    if (isFavorited) {
      await removeFavorite(id);
    } else {
      await addFavorite(id);
    }
  }

  function handleAddToCart() {
    addToCart({ id, title, price, image, quantity });
  }

  useEffect(() => {
    favorites && favorites.find((favorite) => favorite.id === id)
      ? setIsFavorited(true)
      : setIsFavorited(false);
  }, [favorites]);

  return (
    <Container>
      <Content>
        <div className="card">
          <div className="tools">
            {isAdmin ? (
              <FiEdit2
                className="edit"
                role="button"
                onClick={() => navigate(`/editdish/${id}`)}
              />
            ) : (
              <Heart onClick={handleFavorite} checked={isFavorited} />
            )}
          </div>

          <div className="meal">
            <Link className="img-link" to={`/details/${id}`}>
              <img src={cardImage} alt={`Imagem de ${title}`} role="button" />
            </Link>

            <Link to={`/details/${id}`}>
              <h2>{`${title} >`}</h2>
            </Link>

            <p
              className="description"
              role="button"
              onClick={() => navigate(`/details/${id}`)}
            >
              {description}
            </p>

            <span>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(price * quantity)}
            </span>

            {!isAdmin && (
              <div className="wrapper">
                <div className="quantity">
                  <QuantityCounter onUpdate={setQuantity} />
                </div>

                <Button title="incluir" onClick={handleAddToCart} />
              </div>
            )}
          </div>
        </div>
      </Content>
    </Container>
  );
}
