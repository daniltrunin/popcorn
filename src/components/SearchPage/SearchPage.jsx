import styles from "./searchpage.module.css";

import { useState } from "react";

import requestAPI from "../../common/services/movies";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResult, setQueryResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setHasSearched(true);
    try {
      const result = await requestAPI(searchQuery);
      if (result.results.length === 0) {
        setQueryResult(null);
      } else {
        setQueryResult(result);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className={styles["search-page"]}>
      <div className={styles.headling}>Find Your Movie</div>
      <div className={styles["search-wrapper"]}>
        <div className={styles["search-bar-wrapper"]}>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className={styles["search-bar"]}
            placeholder="Lord of the rings"
          ></input>
          <button onClick={handleSubmit} className={styles["submit-btn"]}>
            Enter
          </button>
        </div>
        {isLoading && <div>Loading</div>}
        {!isLoading && hasSearched && !queryResult && (
          <div>No results found</div>
        )}
        {!isLoading && queryResult && queryResult.results.length > 0 && (
          <div className={styles["search-result"]} id="search-result-id">
            {queryResult.results
              .filter((item) => item.poster_path)
              .map((item, index) => (
                <img
                  key={index}
                  className={styles["search-result__item"]}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title || "Movie Poster"}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
