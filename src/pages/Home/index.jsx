import { useState, useEffect } from "react";

import { useDishes } from "../../hooks/dishes";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Category } from "../../components/Category";

import { Banner, Container, Meals, Wrapper, Scrollbar } from "./styles";

import food from "../../assets/food.png";

export function Home() {
  const { dishes } = useDishes();

  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  function filterDishesByCategory(data) {
    const meals = data.filter((dish) => dish.category === "meal");
    const desserts = data.filter((dish) => dish.category === "dessert");
    const drinks = data.filter((dish) => dish.category === "drink");

    setMeals(meals);
    setDesserts(desserts);
    setDrinks(drinks);
  }

  useEffect(() => {
    filterDishesByCategory(dishes);
  }, [dishes]);

  return (
    <Container>
      <Header />

      <Scrollbar>
        <Wrapper>
          <Banner>
            <img src={food} alt="imagem de comida" />

            <div className="infos">
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </Banner>

          <Meals>
            <div className="meals">
              {meals.length > 0 && (
                <Category title="Refeições" dishes={meals} />
              )}
            </div>

            <div className="meals">
              {desserts.length > 0 && (
                <Category title="Sobremesas" dishes={desserts} />
              )}
            </div>

            <div className="meals">
              {drinks.length > 0 && (
                <Category title="Bebidas" dishes={drinks} />
              )}
            </div>
          </Meals>
        </Wrapper>
        <Footer />
      </Scrollbar>
    </Container>
  );
}
