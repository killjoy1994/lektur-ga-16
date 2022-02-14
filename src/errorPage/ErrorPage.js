import styles from "../styles/Error.module.css";

function Errorpage() {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.notfound}>
        <div className={styles["notfound-404"]}>
          <h1>404</h1>
          <h2>Page not found</h2>
          <p>We couldn't find this page.</p>
        </div>
        <a href="#">Back to homepage</a>
      </div>
    </div>
  );
}

export default Errorpage;
