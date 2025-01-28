import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from "./details.module.css";

export default function Details() {
  const location = useLocation();
  const cardDetails = location.state?.cardDetails;
  /* Отображение подробных данных об открытом фильме
  console.log(cardDetails);
  */
  useEffect(() => {
    document.title = `${cardDetails.title}`;
  });

  const handleTrailerClick = (id) => {
    window.open(`https://www.imdb.com/title/${id}`);
  };

  function releaseDate() {
    const date = cardDetails.release_date;
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }

  function runtime() {
    const totalMin = cardDetails.runtime;
    const hours = Math.floor(totalMin / 60);
    const minutes = totalMin % 60;
    if (hours == 0) {
      return `${minutes}m`;
    }
    return `${hours}h ${minutes}m`;
  }

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
        <div className={styles.tags}>
          <div className={styles.tag}>{releaseDate()}</div>
          <div className={styles.tag}>
            {cardDetails.genres.map((item) => item.name).join(", ")}
          </div>
          <div className={styles.tag}>{runtime()}</div>
          <div
            onClick={() => handleTrailerClick(cardDetails.imdb_id)}
            className={`${styles.tag} ${styles.trailer}`}
          >
            Play trailer
          </div>
        </div>
        <div className={styles.overview}>
          <h2 className={styles.headling}>Overview</h2>
          <p className={styles.description}>{cardDetails.overview}</p>
          <h2 className={styles.tagline}>{cardDetails.tagline}</h2>
        </div>
      </div>
    </div>
  );
}
