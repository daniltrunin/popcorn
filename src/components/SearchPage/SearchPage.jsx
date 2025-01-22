import styles from "./searchpage.module.css";

export default function SearchPage() {
  return (
    <div className={styles["search-page"]}>
      <div className={styles.headling}>Find Your Movie</div>
      <input type="text" className={styles["search-bar"]} placeholder="Lord of the rings"></input>
    </div>
  );
}
