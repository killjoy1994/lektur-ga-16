import React from "react";
import { useState } from "react";

import styles from "../../styles/DashboardCourse.module.css";

const DashboardCourse = () => {
  const [edit, setEdit] = useState(false);

  //   Handle submit on profile change
  const submitHandler = (e) => {
    e.preventDefault();

    setEdit(false);
  };

  // Conditional render for User Profile start
  let content;
  const userData = (
    <div className={styles["user-data"]}>
      <p className={styles.name}>John Doe</p>
      <p className={styles.email}>johndoe@gmail.com</p>
      <button
        onClick={() => {
          setEdit(true);
        }}
        className={styles["btn-edit"]}
      >
        Edit Profile
      </button>
    </div>
  );
  const userForm = (
    <form className={styles["user-form"]} onSubmit={submitHandler}>
      <label className={styles["form-control"]}>
        Name<span style={{ color: "red" }}>*</span>
        <input type="text" name="name" autoComplete="off" required />
      </label>
      <label className={styles["form-control"]}>
        Email<span style={{ color: "red" }}>*</span>
        <input type="email" name="email" autoComplete="off" required />
      </label>
      <button type="submit" className={styles["user-btn"]}>
        Save Changes
      </button>
    </form>
  );

  content = !edit ? userData : userForm;
  // Conditional render for User Profile end

  return (
    <main className={styles.dashboard}>
      <div className={styles.container}>
        <div className={styles["left-box"]}>
          <div className={styles["user-profile"]}>
            <div className={styles["img-wrapper"]}>
              <img src="https://cdn.kibrispdr.org/data/foto-seulgi-red-velvet-3.jpg" alt="kang seulgi" />
            </div>
            {content}
          </div>
        </div>
        <div className={styles["right-box"]}></div>
      </div>
    </main>
  );
};

export default DashboardCourse;
