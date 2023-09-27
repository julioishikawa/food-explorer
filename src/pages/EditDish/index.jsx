import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import { api } from "../../services/api";

import { useDishes } from "../../hooks/dishes";

import { Header } from "../../components/Header";
import { Error } from "../../components/Error";
import { FileInput } from "../../components/FileInput";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { NoteItem } from "../../components/NoteItem";
import { CurrencyInput } from "../../components/CurrencyInput";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import {
  Container,
  Form,
  Section,
  DishImage,
  Wrapper,
  Scrollbar,
} from "./styles";

export function EditDish() {
  const params = useParams();

  const navigate = useNavigate();

  const { getAllDishes } = useDishes();

  const [imageFile, setImageFile] = useState("");
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [startSelected, setStartSelected] = useState("");

  const [errors, setErrors] = useState({
    name: false,
    ingredients: false,
    price: false,
    description: false,
  });

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

  function handleEditDish() {
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
      .put(`/dishes/${params.id}`, {
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
            .patch(`/dishes/${data.id}`, imageFormData)
            .then(() => handleBackHome());
        } else {
          handleBackHome();
        }

        alert("Prato atualizado com sucesso!");
      });
  }

  function handleDeleteDish() {
    const confirmed = window.confirm(
      "Você tem certeza que quer excluir este prato?"
    );

    if (confirmed) {
      api.delete(`/dishes/${params.id}`);
      alert("Prato excluido com sucesso!");

      handleBackHome();
    } else {
      return;
    }
  }

  useEffect(() => {
    async function fetchDishes() {
      const dish_id = params.id;
      const { data } = await api.get(`/dishes/${dish_id}`);

      setImageFile(data.image);
      setName(data.name);
      setCategory(data.category);
      setStartSelected(data.category);
      setIngredients(data.ingredients);
      setPrice(data.price);
      setDescription(data.description);
    }

    fetchDishes();
  }, []);

  return (
    <Container>
      <Header />

      <Scrollbar>
        <Section>
          <Link className="back" to="/">
            <FiChevronLeft /> voltar
          </Link>

          <Form>
            <h1 className="edit-order-desktop">Editar prato</h1>
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
                    mouseOverText={imageFile}
                    placeholder={imageFile}
                    onChange={(event) => {
                      setImageFile(event.target.files[0].name);
                      setImage(event.target.files[0]);
                    }}
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
                    placeholder={"Ex.: Salada Ceasar"}
                    type="text"
                    value={name}
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
                  startSelected={startSelected}
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
                  onSelect={(value) => setCategory(value)}
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
                    value={price}
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
                value={description}
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
              className="button-delete-dish"
              title="Excluir prato"
              onClick={handleDeleteDish}
            />

            <Button
              className="button"
              title="Salvar alterações"
              onClick={handleEditDish}
            />
          </div>
        </Section>

        <Footer />
      </Scrollbar>
    </Container>
  );
}
