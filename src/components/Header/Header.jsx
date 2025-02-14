import styles from "./header.module.css";
import logo from "../../../src/assets/icons/popcorn.png";

import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const navigateFavorites = () => {
    navigate("/favorites");
  };
  const navigateProfile = () => {
    navigate("/profile");
  };
  const location = useLocation();
  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={navigateHome}>
        Popcorn
        <img src={logo} alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <button
          className={location.pathname === "/" ? styles["active-view"] : ""}
          onClick={navigateHome}
        >
          Search
        </button>
        <button
          className={
            location.pathname === "/favorites" ? styles["active-view"] : ""
          }
          onClick={navigateFavorites}
        >
          Favorites
        </button>
        <button
          className={
            location.pathname === "/profile" ? styles["active-view"] : ""
          }
          onClick={navigateProfile}
        >
          Profile
        </button>
      </nav>
    </div>
  );
}
