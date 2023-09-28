import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import { api } from "../../services/api";
import { useDishes } from "../../hooks/dishes";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { FileInput } from "../../components/FileInput";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Error } from "../../components/Error";
import { Select } from "../../components/Select";
import { CurrencyInput } from "../../components/CurrencyInput";

import {
  Container,
  Form,
  Section,
  Wrapper,
  Scrollbar,
  DishImage,
} from "./styles";

export function NewDish() {
  const { getAllDishes } = useDishes();

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({
    image: false,
    name: false,
    ingredients: false,
    price: false,
    description: false,
  });

  const navigate = useNavigate();

  function handleImage() {
    const formData = new FormData();
    formData.append("image", image);
    return formData;
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleAddIngredientKeyDown(e) {
    if (e.key === "Enter") {
      setIngredients((prevState) => [...prevState, newIngredient]);
      setNewIngredient("");
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleBackHome() {
    await getAllDishes();
    navigate("/");
  }

  function handleNewDish() {
    if (!image) {
      setErrors((prevState) => ({ ...prevState, image: true }));
    } else {
      setErrors((prevState) => ({ ...prevState, image: false }));
    }

    if (!name) {
      setErrors((prevState) => ({ ...prevState, name: true }));
    } else {
      setErrors((prevState) => ({ ...prevState, name: false }));
    }

    if (ingredients.length === 0) {
      setErrors((prevState) => ({ ...prevState, ingredients: true }));
    } else {
      setErrors((prevState) => ({ ...prevState, ingredients: false }));
    }

    if (newIngredient) {
      setErrors((prevState) => ({ ...prevState, newIngredient: true }));
    } else {
      setErrors((prevState) => ({ ...prevState, newIngredient: false }));
    }

    if (!price) {
      setErrors((prevState) => ({ ...prevState, price: true }));
    } else {
      setErrors((prevState) => ({ ...prevState, price: false }));
    }

    if (!description) {
      setErrors((prevState) => ({ ...prevState, description: true }));

      return;
    } else {
      setErrors((prevState) => ({ ...prevState, description: false }));
    }

    api
      .post("/dishes", {
        name,
        category,
        price,
        ingredients,
        description,
      })
      .then(({ data }) => {
        if (image) {
          const imageFormData = handleImage();
          api
            .patch(`/dishes/${data.dish_id}`, imageFormData)
            .then(() => handleBackHome());
        } else {
          handleBackHome();
        }

        alert("Prato criado com sucesso!");
      });
  }

  return (
    <Container>
      <Header />

      <Scrollbar>
        <Section>
          <BackButton />
          <Form>
            <h1 className="new-order-mobile">Novo prato</h1>
            <h1 className="new-order-desktop">Adicionar prato</h1>
            <Wrapper>
              <DishImage>
                <p>Imagem do prato</p>
                <div
                  className="dish-image"
                  style={{
                    border: errors.image ? "1px solid red" : "",
                  }}
                >
                  <FileInput
                    id="image"
                    mouseOverText={image ? image.name : "Selecionar imagem"}
                    placeholder={image ? image.name : "Selecione uma imagem"}
                    onChange={(event) => setImage(event.target.files[0])}
                  />
                </div>
                {errors.image && (
                  <Error title="Você precisa adicionar uma imagem do prato" />
                )}
              </DishImage>

              <div className="name">
                <p>Nome</p>
                <div className="box">
                  <Input
                    placeholder="Ex.: Salada Ceasar"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    error={errors.name}
                  />
                  {errors.name && (
                    <Error title="Você precisa adicionar um nome no prato" />
                  )}
                </div>
              </div>

              <div className="category">
                <p>Categoria</p>
                <Select
                  id="category"
                  options={[
                    {
                      title: "Refeições",
                      value: "meal",
                    },
                    {
                      title: "Sobremesas",
                      value: "dessert",
                    },
                    {
                      title: "Bebidas",
                      value: "drink",
                    },
                  ]}
                  onSelect={setCategory}
                />
              </div>
            </Wrapper>

            <Wrapper>
              <div className="ingredients">
                <p>Ingredientes</p>
                <div className="box">
                  <div
                    className="tags"
                    style={{
                      border: errors.ingredients ? "1px solid red" : "",
                    }}
                  >
                    {ingredients.map((ingredient, index) => (
                      <NoteItem
                        key={String(index)}
                        title={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))}

                    <NoteItem
                      isNew
                      placeholder="Adicionar"
                      onChange={(e) => setNewIngredient(e.target.value)}
                      value={newIngredient}
                      onClick={handleAddIngredient}
                      onKeyDown={handleAddIngredientKeyDown}
                    />
                  </div>

                  {errors.ingredients && (
                    <Error title="Você precisa adicionar os ingredientes do prato" />
                  )}
                </div>
              </div>

              <div className="price">
                <p>Preço</p>
                <div className="box">
                  <CurrencyInput
                    placeholder="R$ 00,00"
                    onValueChange={(value, _, values) => setPrice(values.float)}
                    error={errors.price}
                  />

                  {errors.price && (
                    <Error title="Você precisa adicionar um preço no prato" />
                  )}
                </div>
              </div>
            </Wrapper>

            <p>Descrição</p>
            <div className="box">
              <Textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) => setDescription(e.target.value)}
                style={{ border: errors.description ? "1px solid red" : "" }}
              />

              {errors.description && (
                <Error title="Você precisa descrever o novo prato" />
              )}
            </div>
          </Form>

          <div className="button-wrapper">
            <Button
              className="button"
              title="Salvar alterações"
              onClick={handleNewDish}
            />
          </div>
        </Section>
        <Footer />
      </Scrollbar>
    </Container>
  );
}
