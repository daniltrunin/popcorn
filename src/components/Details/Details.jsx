import { useLocation } from "react-router-dom";
import styles from "./details.module.css";

export default function Details() {
  const location = useLocation();
  const cardDetails = location.state?.cardDetails;
  console.log(cardDetails);
  return (
    <div className={styles.wrapper}>
      <div className={styles.sideber}>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w500/${cardDetails.poster_path}`}
          alt={cardDetails.title || "Movie Poster"}
        />
        <button className={styles["favorites-btn"]}>Add to favorites</button>
      </div>
      <div className={styles["main-content"]}>
        <h1 className={styles.title}>{cardDetails.title}</h1>
      </div>
    </div>
  );
}
