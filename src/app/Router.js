import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { OnePieceChap, HomePage } from "../pages";

export const Router = () => {
  const [onepiece, setOnePiece] = React.useState("");
  const [favorites, setFavorite] = React.useState([]);

  function handleSetOnePiece(onepiece) {
    setOnePiece(onepiece);
  }

  function handleAddFavorite(onepiece) {
    setFavorite((oldFavorites) => [...oldFavorites, onepiece]);
  }

  function deleteFavorite(onePieceName) {
    setFavorite(favorites.filter((favorite) => favorite.name !== onePieceName));
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/card">
          <PokeCard
            onepiece={onepiece}
            addFavorite={handleAddFavorite}
            favorites={favorites}
            deleteFav={deleteFavorite}
          />
        </Route>

        <Route path="/">
          <HomePage favorites={favorites} setOnePiece={handleSetOnePiece} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
