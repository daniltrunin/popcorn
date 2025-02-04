import styles from "./loginwindow.module.css";

export default function LoginWindow() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          className={`${styles.input} ${styles.username}`}
          type="text"
          placeholder="Login"
        />
        <input
          className={`${styles.input} ${styles.password}`}
          type="text"
          placeholder="Password"
        />
        <button className={`${styles.button} ${styles.login}`}>Login</button>
        <button className={`${styles.button} ${styles.register}`}>
          Register
        </button>
      </div>
    </div>
  );
}
