import styles from "./searchresult.module.css";
import PropTypes from "prop-types";

export default function SearchResult(props) {
  SearchResult.propTypes = {
    propResult: PropTypes.object.isRequired,
  };
  return (
    <div className={styles["search-result"]} id="search-result-id">
      {props.propResult.results
        .filter((item) => item.poster_path)
        .map((item, index) => (
          <div className={styles.item} key={index}>
            <img
              className={styles["item__poster"]}
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title || "Movie Poster"}
            />
          </div>
        ))}
    </div>
  );
}
