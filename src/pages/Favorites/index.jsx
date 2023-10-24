import { useFavorites } from "../../hooks/favorites";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { FavoriteItem } from "../../components/FavoriteItem";

import EmptyFavoritesImage from "../../assets/no-favorites.svg";

import { Container, EmptyFavorites, FavoritesList, Scrollbar } from "./styles";

export function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  async function handleRemoveFavorite(id) {
    await removeFavorite(id);
  }

  return (
    <Container>
      <Header />

      <Scrollbar>
        <main>
          <BackButton />
          {favorites.length === 0 ? (
            <EmptyFavorites>
              <img src={EmptyFavoritesImage} alt="Não há favoritos" />
              <h2>
                Você ainda não tem <span>favoritos</span>.
              </h2>
            </EmptyFavorites>
          ) : (
            <div className="favorites-wrapper">
              <h1>Meus favoritos</h1>
              <FavoritesList>
                {favorites.map((favorite) => (
                  <FavoriteItem
                    id={favorite.id}
                    key={favorite.id}
                    title={favorite.name}
                    image={favorite.image}
                    buttonText="Remover"
                    onClick={() => handleRemoveFavorite(favorite.id)}
                  />
                ))}
              </FavoritesList>
            </div>
          )}
        </main>
        <Footer />
      </Scrollbar>
    </Container>
  );
}
