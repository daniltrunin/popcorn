/* 
    Компонент с карточками фильмов из избранного
*/

import styles from "./favoritescards.module.css";
import { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";

let initialFavorites = [
  {
    id: "330459",
    name: "Star wars",
    poster_path: `https://image.tmdb.org/t/p/w500//i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg`,
  },
  {
    id: "120",
    name: "Lord of the rings",
    poster_path: `https://image.tmdb.org/t/p/w500//6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg`,
  },
];

export default function FavoritesCards() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favoritesStorage, setFavoritesStorage] = useState(initialFavorites);
  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredFavorites = initialFavorites.filter((movie) =>
      movie.name.toLowerCase().includes(query)
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
