import styles from "./searchresult.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import requestAPIWithDetailsAndId from "../../common/services/details_request";

export default function SearchResult(props) {
  SearchResult.propTypes = {
    propResult: PropTypes.object.isRequired,
  };
  const navigate = useNavigate();

  const renderClickedCard = async (card) => {
    const cardId = card.id;
    try {
      const result = await requestAPIWithDetailsAndId(cardId);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    navigate(`/about/${cardId}`);
  };

  return (
    <div className={styles["search-result"]} id="search-result-id">
      {props.propResult.results
        .filter((item) => item.poster_path)
        .map((item, index) => (
          <div
            onClick={() => renderClickedCard(item)}
            className={styles.item}
            key={index}
          >
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
