import styles from "../styles/successRegister.module.css";

function successRegister () {
    return (
        <div className={styles["success-signup"]}>
            <div className={styles.success-signup}>
                <div className={styles["success-signup-thankyou"]}>
                    <h1>Thank you for registering.</h1>
                    <p>please continue to the next page</p>
                </div>
            </div>
            <a href="/">Back to homepage</a>
        </div>
    );
}

export default successRegister;