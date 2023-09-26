import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiMinus, FiPlus } from "react-icons/fi";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { Ingredients } from "../../components/Ingredients";
import { QuantityCounter } from "../../components/QuantityCounter";
import { Footer } from "../../components/Footer";

import { Container, Wrapper } from "./styles";

import messages from "../../assets/Messages.png";

export function Details() {
  const params = useParams();
  const navigate = useNavigate();

  const { isAdmin } = useAuth();

  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get(`/dishes/${params.id}`);

      setData(res.data);
    }

    fetchData();
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
              src={`${api.defaults.baseURL}/files/${data.image}`}
              alt={`Imagem do prato ${data.name}`}
            />

            <div className="order-wrapper">
              <h1>{data.name}</h1>

              <p>{data.description}</p>

              <div className="tags">
                {data.ingredients.map((ingredient, index) => (
                  <Ingredients key={index} title={ingredient} />
                ))}
              </div>

              <div className="order">
                {!isAdmin && (
                  <div className="quantity">
                    <QuantityCounter onUpdate={setQuantity} />
                  </div>
                )}

                {!isAdmin && (
                  <button className="order-button">
                    <img
                      className="button-mobile"
                      src={messages}
                      alt="Imagem ilustrativa de uma comanda"
                    />

                    <p className="button-mobile">
                      pedir ∙{" "}
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(data.price * quantity)}
                    </p>

                    <p className="button-desktop">
                      incluir ∙{" "}
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(data.price * quantity)}
                    </p>
                  </button>
                )}

                {isAdmin && (
                  <Link to={`/editdish/${data.id}`}>
                    <button className="edit-button">Editar prato</button>
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
