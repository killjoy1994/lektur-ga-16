import { Link } from "react-router-dom";
import styles from "../../styles/successRegister.module.css";

function successRegister () {
    return (
        <div className={styles["success-signup"]}>
            <div className={styles["success-signup"]}>
                <div className={styles["success-signup-thankyou"]}>
                    <h1>Thank you for registering.</h1>
                    <p>please continue to the next page</p>
                </div>
                <button className="back-homepage">
                    <Link to="/">
                        <span>Back to homepage</span>
                    </Link>
                </button>
            </div>
            
            
        </div>
        
    );
}

export default successRegister;