import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import { api } from "../../services/api";

import { useDishes } from "../../hooks/dishes";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";

import {
  Container,
  Form,
  Section,
  OrderImage,
  Wrapper,
  Scrollbar,
} from "./styles";

import upload from "../../assets/upload.svg";

export function EditDish() {
  const params = useParams();

  const { dishes } = useDishes();

  const [dish, setDish] = useState(dishes);

  const imageURL = `${api.defaults.baseURL}/files/${dish.image}`;
  // ARRUMAR AQUI
  const [image, setImage] = useState(imageURL);
  const [imageFile, setImageFile] = useState(null);

  const [name, setName] = useState(dish.name);
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({
    imageFile: false,
    name: false,
    category: false,
    ingredients: false,
    price: false,
    description: false,
  });

  const navigate = useNavigate();

  function handlePreviewImage() {
    const uploadButton = document.getElementById("image");

    const image = document.querySelector(".image");

    uploadButton.addEventListener("change", () => {
      image.classList.remove("hide");
    });
  }

  function handleChangeImage(e) {
    const file = e.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview);
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleEditDish() {
    if (!imageFile) {
      setErrors((prevState) => ({ ...prevState, image: true }));

      return;
    } else {
      setErrors((prevState) => ({ ...prevState, image: false }));
    }

    if (!name) {
      setErrors((prevState) => ({ ...prevState, name: true }));

      return;
    } else {
      setErrors((prevState) => ({ ...prevState, name: false }));
    }

    if (!category) {
      setErrors((prevState) => ({ ...prevState, category: true }));

      return;
    } else {
      setErrors((prevState) => ({ ...prevState, category: false }));
    }

    if (ingredients.length === 0) {
      setErrors((prevState) => ({ ...prevState, ingredients: true }));

      return;
    } else {
      setErrors((prevState) => ({ ...prevState, ingredients: false }));
    }

    if (newIngredient) {
      setErrors((prevState) => ({ ...prevState, newIngredient: true }));

      return;
    } else {
      setErrors((prevState) => ({ ...prevState, newIngredient: false }));
    }

    if (!price) {
      setErrors((prevState) => ({ ...prevState, price: true }));

      return;
    } else {
      setErrors((prevState) => ({ ...prevState, price: false }));
    }

    if (!description) {
      setErrors((prevState) => ({ ...prevState, description: true }));

      return;
    } else {
      setErrors((prevState) => ({ ...prevState, description: false }));
    }

    const dish_id = await api.put(`/dishes/${params.id}`, {
      name,
      category,
      price,
      ingredients,
      description,
    });

    const fileUploadForm = new FormData();
    fileUploadForm.append("image", imageFile);

    await api.patch(`/dishes/image/${dish_id.data.id}`, fileUploadForm);

    alert("Prato atualizado com sucesso!");
    navigate("/");
  }

  // useEffect(() => {
  //   async function fetchDishes() {
  //     const res = await api.get(`/dishes/${params.id}`);

  //     setDish(res.data);
  //   }

  //   fetchDishes();
  // }, [params.id]);

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
              <OrderImage>
                <p>Imagem do prato</p>
                <label
                  htmlFor="image"
                  style={{ border: errors.image ? "1px solid red" : "" }}
                >
                  <input
                    type="file"
                    id="image"
                    onClick={handlePreviewImage}
                    onChange={handleChangeImage}
                  />
                  <img src={upload} alt="imagem selecionada" />
                  Selecione imagem
                </label>
                {errors.image && (
                  <Error title="Você precisa adicionar uma imagem do prato" />
                )}

                <img className="image" src={image} alt={dish.name} />
              </OrderImage>

              <div className="name">
                <p>Nome</p>
                <div className="box">
                  <Input
                    placeholder={"Ex.: Salada Ceasar"}
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
                <div className="select">
                  <select
                    id="standard-select"
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ border: errors.category ? "1px solid red" : "" }}
                  >
                    <option value="" className="hide">
                      Selecione a categoria
                    </option>
                    <option value="Entradas">Entradas</option>
                    <option value="Pratos principais">Pratos Principais</option>
                    <option value="Bebidas">Bebidas</option>
                  </select>

                  {errors.category && (
                    <Error title="Você precisa selecionar uma categoria" />
                  )}
                </div>
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
                  <Input
                    placeholder="R$ 00,00"
                    onChange={(e) => setPrice(e.target.value)}
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

          <div className="teste">
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
