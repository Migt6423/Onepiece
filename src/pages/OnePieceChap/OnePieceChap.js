import React from "react";
import { useHistory } from "react-router";

export const ChapterCard= ({ Chapter, addFavorite, favorites, deleteFav }) => {
  const [pokemonData, setChapterData] = React.useState();
  const [status, setStatus] = React.useState("idle");

  const history = useHistory();

  React.useEffect(() => {
    setStatus("loading");
    fetch(`'https://onepiececover.com/api/chapters/'`)
      .then((response) => response.json().then((data) => setOnePieceData(data)))
      .catch((error) => setStatus("error"))
      .finally(setStatus("idle"));
  }, [pokemon]);

  const favoriteNames = favorites.map((favorite) => favorite.name);

  const OnePieceAdded =
    OnePieceData && favoriteNames.includes(OnePieceData.name);

  console.log(isOnePieceAdded);

  if (status === "idle") {
    return (
      <>
        <button onClick={() => history.push("./")}>Volver a la Home</button>
        {pokemonData && (
          <>
            <img
              src={pokemonData.sprites.front_default}
              alt="Imagen del Pokemon"
            />
            <button
              onClick={
                isOnePieceAdded
                  ? () => deleteFav(OnePieceData.name)
                  : () => addFavorite(OnePieceData)
              }
            >
              {isOnePieceAdded ? "Borrar fav" : "Agregar fav"}
            </button>
          </>
        )}
      </>
    );
  } else if (status === "loading") {
    return "Cargando...";
  } else if (status === "error") {
    return (
      <>
        <button onClick={() => history.push("./")}>Volver a la Home</button>
        "Este capitulo no existe"
      </>
    );
  }
};
