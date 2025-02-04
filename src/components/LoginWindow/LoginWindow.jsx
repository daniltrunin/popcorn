import styles from "./loginwindow.module.css";
import { useState } from "react";

function sendDataToLogin(username, password) {
  const obj = {
    user: username,
    pass: password,
  };
  console.log(obj);
}

function sendDataToRegister(username, password) {
  const obj = {
    user: username,
    pass: password,
  };
  console.log(obj);
}

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
          onClick={() => sendDataToLogin(username, password)}
        >
          Login
        </button>
        <button
          className={`${styles.button} ${styles.register}`}
          type="submit"
          onClick={() => sendDataToRegister(username, password)}
        >
          Register
        </button>
      </div>
    </div>
  );
}
