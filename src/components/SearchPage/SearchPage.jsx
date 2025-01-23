import styles from "./searchpage.module.css";

import { useState } from "react";

import requestAPI from "../../common/services/movies";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResult, setQueryResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const result = await requestAPI(searchQuery);
      setQueryResult(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["search-page"]}>
      <div className={styles.headling}>Find Your Movie</div>
      <div className={styles["search-wrapper"]}>
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
        <div id="search-result-id">
          {queryResult ? queryResult.results[0].title : ""}
        </div>
      </div>
    </div>
  );
}
