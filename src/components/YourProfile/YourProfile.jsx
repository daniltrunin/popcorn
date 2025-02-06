import defProfileImg from "../../assets/images/default-profile-picture.png";
import styles from "./yourprofile.module.css";
import { useEffect } from "react";

export default function YourProfile({ userData, onLogOut }) {
  useEffect(() => {
    document.title = userDataJSON.username;
  });

  const userDataJSON = JSON.parse(userData);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles["profile-picture"]} src={defProfileImg} />
        <h1>{userDataJSON.username}</h1>
      </div>
      <button className={styles["logout-btn"]} onClick={onLogOut}>
        LOGOUT
      </button>
    </div>
  );
}
