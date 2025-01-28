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
        <div className={styles.tags}>
          <div className={styles.tag}>{cardDetails.release_date}</div>
          <div className={styles.tag}>
            {cardDetails.genres.map((item) => item.name).join(", ")}
          </div>
          <div className={styles.tag}>{cardDetails.runtime} min</div>
        </div>
        <div className={styles.overview}>
          <h2 className={styles.headling}>Overview</h2>
          <p className={styles.description}>{cardDetails.overview}</p>
          <h2 className={styles.tagline}>{cardDetails.tagline}</h2>
        </div>
        <div>
          <h3 className={styles.headling}>Production companies</h3>
          <div className={styles.content}>
            {cardDetails.production_companies
              .map((item) => item.name)
              .join(", ")}
          </div>
        </div>
        <div className={styles["finance-wrapper"]}>
          <h2 className={styles.headling}>About finance</h2>
          <div className={styles.content}>
            <div>
              {cardDetails.budget ? `Budget ${cardDetails.budget} $` : ``}
            </div>
            <div>
              {cardDetails.revenue ? `Revenue ${cardDetails.revenue} $` : ``}
            </div>
          </div>
        </div>
        <div className={styles.country}>
          <h2 className={styles.headling}>Country and movie language</h2>
          <div className={styles.content}>
            {cardDetails.origin_country} &{" "}
            {cardDetails.spoken_languages.map((item) => item.english_name)}
          </div>
        </div>
      </div>
    </div>
  );
}
