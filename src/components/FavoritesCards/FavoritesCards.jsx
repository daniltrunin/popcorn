/* 
    Компонент с карточками фильмов из избранного
*/

import styles from "./favoritescards.module.css";
import { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";
import fetchMoviesData from "../../common/services/receive_movies";

// let initialFavorites = [
//   {
//     id: "330459",
//     title: "Star wars",
//     poster_path: `https://image.tmdb.org/t/p/w500//i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg`,
//   },
// ];

async function getData() {
  const userStr = localStorage.getItem("userData");
  const userStr2 = JSON.parse(userStr);
  const userJSON = JSON.parse(userStr2);
  const user = {
    username: userJSON.username,
    password: userJSON.password,
  };
  const movies = await fetchMoviesData(user);
  return movies;
}

let initialFavorites = [];

async function initializeFavorites() {
  const moviesFetched = await getData();
  initialFavorites = moviesFetched;
}

initializeFavorites();

export default function FavoritesCards() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favoritesStorage, setFavoritesStorage] = useState(initialFavorites);
  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredFavorites = initialFavorites.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );

    setFavoritesStorage(filteredFavorites);
  };
  return (
    <div className={styles["search-page"]}>
      <div className={styles.headling}>Favorite Movies</div>
      <div className={styles["search-wrapper"]}>
        <div className={styles["search-bar-wrapper"]}>
          <input
            value={searchQuery}
            onChange={handleInputChange}
            type="text"
            className={styles["search-bar"]}
            placeholder="Lord of the rings"
          ></input>
        </div>
        {favoritesStorage && favoritesStorage.length > 0 ? (
          <SearchResult propResult={{ results: favoritesStorage }} />
        ) : (
          <div>No results</div>
        )}
      </div>
    </div>
  );
}
