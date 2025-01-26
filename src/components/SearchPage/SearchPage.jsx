import styles from "./searchpage.module.css";

import { useState } from "react";

import requestAPI from "../../common/services/movies";

import SearchResult from "../SearchResult/SearchResult";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResult, setQueryResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [page, setPage] = useState(1);

  const handleSubmit = async () => {
    setIsLoading(true);
    setHasSearched(true);
    try {
      const result = await requestAPI(searchQuery);
      if (result.results.length === 0) {
        setQueryResult(null);
      } else {
        setQueryResult(result);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handlePageClick = (event) => {
    if (
      event.target.id == "next-page-id" ||
      event.target.id == "next-page-id-ext"
    ) {
      setPage(Number(page) + 1);
    } else if (event.target.id == "prev-page-id") {
      if (Number(page) == 1) {
        return;
      }
      setPage(Number(page) - 1);
    }
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
        {isLoading && <div className={styles.loading}>Loading</div>}
        {!isLoading && hasSearched && !queryResult && (
          <div className={styles["no-results"]}>No results found 😢</div>
        )}
        {!isLoading && queryResult && queryResult.results.length > 0 && (
          <SearchResult propResult={queryResult} />
        )}
        {!isLoading && queryResult && (
          <div className={styles["page-btn-wrapper--only-next"]}>
            {page == 1 && (
              <button
                id="next-page-id"
                onClick={handlePageClick}
                className={styles["page-btn"]}
              >
                Next
              </button>
            )}
            {page > 1 && (
              <div className={styles["page-btn-wrapper"]}>
                <button
                  id="prev-page-id"
                  onClick={handlePageClick}
                  className={styles["page-btn"]}
                >
                  Previous
                </button>
                <button
                  id="next-page-id-ext"
                  onClick={handlePageClick}
                  className={styles["page-btn"]}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
