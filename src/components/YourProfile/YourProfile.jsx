import defProfileImg from "../../assets/images/default-profile-picture.png";
import styles from "./yourprofile.module.css";

export default function YourProfile({ userData }) {
  const userDataJSON = JSON.parse(userData);

  return (
    <div>
      <div className={styles.header}>
        <img className={styles["profile-picture"]} src={defProfileImg} />
        <h1>{userDataJSON.username}</h1>
      </div>
    </div>
  );
}
