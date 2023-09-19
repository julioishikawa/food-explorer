import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Container, Content } from "./styles";
import { Button } from "../Button";

import favorite from "../../assets/favorite.svg";
// import favoriteSelected from "../../assets/favorite-selected.svg";
import edit from "../../assets/edit.svg";

export function Card({ data, ...rest }) {
  const { user } = useAuth();

  const cardImage = `${api.defaults.baseURL}/files/${data.image}`;

  // const [favorites, setFavorites] = useState(false);
  const [quantity, setQuantity] = useState(1);

  function addQuantity() {
    setQuantity((prevState) => prevState + 1);
  }

  function subQuantity() {
    if (quantity > 1) {
      setQuantity((prevState) => prevState - 1);
      return;
    }
  }

  function numberMapper(number) {
    if (number < 10) {
      return `0${number}`;
    }

    return number;
  }

  return (
    <Container {...rest}>
      <Content>
        <div className="card">
          <div className="tools">
            {user.isAdmin === 0 && (
              <div>
                <img
                  className="favorite"
                  src={favorite}
                  alt="Imagem de um coração"
                />

                {/* <img
                  className="favorite"
                  src={favoriteSelected}
                  alt="Imagem de um coração vermelho"
                /> */}
              </div>
            )}

            {user.isAdmin === 1 && (
              <Link to={`/editorder/${data.id}`}>
                <img className="edit" src={edit} alt="Imagem de um lápis" />
              </Link>
            )}
          </div>

          <div className="meal">
            <img src={cardImage} alt="card image" />

            <Link to={`/details/${data.id}`}>
              <h2>{`${data.name} >`}</h2>
            </Link>

            <p className="description">{data.description}</p>

            <span>R$ {data.price}</span>

            {user.isAdmin === 0 && (
              <div className="wrapper">
                <div className="quantity">
                  <FiMinus onClick={subQuantity} />

                  <p>{numberMapper(quantity)}</p>

                  <FiPlus onClick={addQuantity} />
                </div>

                <Link to="/shoppingcart">
                  <Button title="incluir" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </Content>
    </Container>
  );
}
