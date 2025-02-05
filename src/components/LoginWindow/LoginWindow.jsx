import styles from "./loginwindow.module.css";
import { useState } from "react";
import sendDataToAuth from "../../common/services/login";

export default function LoginWindow() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          className={`${styles.input} ${styles.username}`}
          type="text"
          placeholder="Login"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={`${styles.input} ${styles.password}`}
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={`${styles.button} ${styles.login}`}
          type="submit"
          onClick={() => sendDataToAuth(username, password, "login")}
        >
          Login
        </button>
        <button
          className={`${styles.button} ${styles.register}`}
          type="submit"
          onClick={() => sendDataToAuth(username, password, "reg")}
        >
          Register
        </button>
      </div>
    </div>
  );
}
