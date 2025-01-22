import styles from "./searchpage.module.css";

import { useState } from "react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = () => {
    console.log(searchQuery);
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
      </div>
    </div>
  );
}
