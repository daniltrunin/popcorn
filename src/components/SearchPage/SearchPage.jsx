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

  const handleSubmit = async (pageToRequest) => {
    setIsLoading(true);
    setHasSearched(true);

    try {
      const result = await requestAPI(searchQuery, pageToRequest);
      /* Вывод результатов по запросу 
      console.log(result); */
      if (result.results.length === 0) {
        setQueryResult(null);
        setPage(1);
      } else {
        setQueryResult(result);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handlePageChange = (direction) => {
    const newPageValue = direction === "next" ? page + 1 : page - 1;
    setPage(newPageValue);
    handleSubmit(newPageValue);
  };

  const renderPaginationButtons = () => {
    const isFirstPage = page === 1;

    return (
      <div className={styles["pagination-wrapper"]}>
        <div className={styles["current-page"]}>{page}</div>
        <div className={styles["page-btn-wrapper"]}>
          {!isFirstPage && (
            <button
              onClick={() => handlePageChange("prev")}
              className={styles["page-btn"]}
            >
              Previous
            </button>
          )}
          <button
            onClick={() => handlePageChange("next")}
            className={styles["page-btn"]}
          >
            Next
          </button>
        </div>
      </div>
    );
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
          <button
            onClick={() => handleSubmit(1)}
            className={styles["submit-btn"]}
          >
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
        {!isLoading && queryResult && renderPaginationButtons()}
      </div>
    </div>
  );
}
