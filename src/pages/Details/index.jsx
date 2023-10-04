import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Ingredients } from "../../components/Ingredients";
import { QuantityCounter } from "../../components/QuantityCounter";
import { Footer } from "../../components/Footer";

import { Container, Wrapper, Scrollbar } from "./styles";

import order from "../../assets/order.png";

export function Details() {
  const params = useParams();

  const { isAdmin } = useAuth();
  const { addToCart } = useCart();

  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    addToCart({
      id: data.id,
      title: data.name,
      price: data.price,
      image: data.image,
      quantity,
    });
  }

  useEffect(() => {
    async function fetchData() {
      const res = await api.get(`/dishes/${params.id}`);

      setData(res.data);
    }

    fetchData();
  }, [params.id]);

  return (
    <Container>
      <Header />

      <Scrollbar>
        <div className="dish-wrapper">
          <BackButton />

          {data && (
            <Wrapper>
              <img
                className="dish-image"
                src={`${api.defaults.baseURL}/files/${data.image}`}
                alt={`Imagem do prato ${data.name}`}
              />

              <div className="infos-wrapper">
                <h1>{data.name}</h1>

                <p>{data.description}</p>

                <div className="tags">
                  {data.ingredients.map((ingredient, index) => (
                    <Ingredients key={index} title={ingredient} />
                  ))}
                </div>

                <div className="quantity-wrapper">
                  {!isAdmin && (
                    <div className="quantity">
                      <QuantityCounter onUpdate={setQuantity} />
                    </div>
                  )}

                  {!isAdmin && (
                    <button className="dish-button" onClick={handleAddToCart}>
                      <img
                        className="button-mobile"
                        src={order}
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
      </Scrollbar>
    </Container>
  );
}
