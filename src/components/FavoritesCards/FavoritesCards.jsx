/* 
    Компонент с карточками фильмов из избранного
*/

import styles from "./favoritescards.module.css";
import { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";

let favoritesStorage = [
  {
    id: "330459",
    poster_path: `https://image.tmdb.org/t/p/w500//i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg`,
  },
  {
    id: "330459",
    poster_path: `https://image.tmdb.org/t/p/w500//i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg`,
  },
];

export default function FavoritesCards() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={styles["search-page"]}>
      <div className={styles.headling}>Favorite Movies</div>
      <div className={styles["search-wrapper"]}>
        <div className={styles["search-bar-wrapper"]}>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className={styles["search-bar"]}
            placeholder="Lord of the rings"
          ></input>
        </div>
        {favoritesStorage && favoritesStorage.length > 0 && (
          <SearchResult propResult={{ results: favoritesStorage }} />
        )}
      </div>
    </div>
  );
}
