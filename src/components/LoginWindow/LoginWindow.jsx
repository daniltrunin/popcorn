import styles from "./loginwindow.module.css";
import { useState } from "react";
import propTypes from "prop-types";
import sendDataToAuth from "../../common/services/login";

export default function LoginWindow({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = await sendDataToAuth(username, password, "login");
    if (data) {
      onLoginSuccess(data); // Вызываем коллбек и передаём данные
    } else {
      alert("Invalid credentials. Please try again."); // Обработка ошибки
    }
  };

  const handleRegister = async () => {
    await sendDataToAuth(username, password, "reg");
  };

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
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className={`${styles.button} ${styles.register}`}
          type="submit"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}
