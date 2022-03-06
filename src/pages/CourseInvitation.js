import Footer from "../components/Footer";
import NavbarComponent from "../components/Header/NavbarComponent";
import styles from "../styles/CourseInvitation.module.css";

const CourseInvitation = () => {
  return (
    <>
      <NavbarComponent />
      <main className={styles.main}>
        <div className={`${styles["wrapper-invite"]} shadow`}>
          <div className={styles.description}>
            <h3>Course Invitation</h3>
            <p>You have been invited to a class, if you don't have access to go to course then please sign up first</p>
          </div>
          <button className={styles['btn-course']}>Go To Course</button>
          <button className={styles['btn-signup']}>Sign Up</button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CourseInvitation;
