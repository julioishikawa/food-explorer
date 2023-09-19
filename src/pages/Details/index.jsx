import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiChevronLeft, FiMinus, FiPlus } from "react-icons/fi";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { Ingredients } from "../../components/Ingredients";
import { Footer } from "../../components/Footer";

import { Container, Wrapper } from "./styles";

import messages from "../../assets/Messages.png";

export function Details() {
  const { user } = useAuth();

  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

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

  useEffect(() => {
    async function fetchOrder() {
      const res = await api.get(`/orders/${params.id}`);
      const orderImage = `${api.defaults.baseURL}/files/${res.data.image}`;

      setImage(orderImage);
      setData(res.data);
    }

    fetchOrder();
  }, []);

  return (
    <Container>
      <Header />

      <div className="details">
        <Link className="back" to="/">
          <FiChevronLeft /> voltar
        </Link>

        {data && (
          <Wrapper>
            <img
              className="order-image"
              src={image}
              alt="Imagem de uma Salada Ravanello"
            />

            <div className="order-wrapper">
              <h1>{data.name}</h1>

              <p>{data.description}</p>

              {data.ingredients && (
                <div className="tags">
                  {data.ingredients.map((ingredient) => (
                    <Ingredients
                      key={String(ingredient.id)}
                      title={ingredient.title}
                    />
                  ))}
                </div>
              )}

              <div className="order">
                {user.isAdmin === 0 && (
                  <div className="quantity">
                    <FiMinus onClick={subQuantity} />
                    <p>{numberMapper(quantity)}</p>
                    <FiPlus onClick={addQuantity} />
                  </div>
                )}

                {user.isAdmin === 0 && (
                  <button>
                    <img
                      className="button-mobile"
                      src={messages}
                      alt="Imagem ilustrativa de uma comanda"
                    />
                    <p className="button-mobile">pedir ∙ R$ {data.price}</p>
                    <p className="button-desktop">incluir ∙ R$ {data.price}</p>
                  </button>
                )}

                {user.isAdmin === 1 && (
                  <Link to={`/editorder/${data.id}`}>
                    <button className="edit">Editar prato</button>
                  </Link>
                )}
              </div>
            </div>
          </Wrapper>
        )}
      </div>

      <Footer />
    </Container>
  );
}
