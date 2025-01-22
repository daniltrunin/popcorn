import styles from "./searchpage.module.css";

import { useState } from "react";

import requestAPI from "../../common/services/movies";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResult, setQueryResult] = useState("");
  const handleSubmit = () => {
    requestAPI(searchQuery).then((data) => {
      setQueryResult(data);
    });
    const newItem = document.createElement("div");
    newItem.textContent = queryResult.data.Title;
    document.querySelector("#search-result-id").append(newItem);
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
        <div id="search-result-id"></div>
      </div>
    </div>
  );
}
