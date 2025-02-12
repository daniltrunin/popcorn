/* 
    Компонент с карточками фильмов из избранного
*/

import styles from "./favoritescards.module.css";
import { useState, useEffect } from "react";
import SearchResult from "../SearchResult/SearchResult";
import fetchMoviesData from "../../common/services/receive_movies";
import getUserFromLocalStorage from "../../common/services/get_user_from_localstorage";

async function getData() {
  const user = await getUserFromLocalStorage();
  const movies = await fetchMoviesData(user);
  return movies;
}

export default function FavoritesCards() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favoritesStorage, setFavoritesStorage] = useState([]);
  const [initialFavorites, setInitialFavorites] = useState([]);

  useEffect(() => {
    async function initializeFavorites() {
      const moviesFetched = await getData();
      setInitialFavorites(moviesFetched);
      setFavoritesStorage(moviesFetched);
    }
    initializeFavorites();
  }, []);

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
