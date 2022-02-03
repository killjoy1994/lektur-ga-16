import React from "react";

import styles from "../../styles/MainContent.module.css";
import Cards from "../CourseCards/Cards";
import CategoryGroup from "./CategoryGroup";

const MainContent = () => {
  return (
    <div className={styles["main-content"]}>
      <h2 className={styles.title}>What To Learn Next</h2>
      <CategoryGroup />
      <Cards />
    </div>
  );
};

export default MainContent;
