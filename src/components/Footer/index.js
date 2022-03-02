import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";
import { getCoursesAction } from "../../redux/actions/Courses/getCoursesAction";
import styles from "../../styles/Footer.module.css";
import LoaderSecond from "../Loader/LoaderSecond";

const Footer = () => {
  const { courseList, isLoading } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  //getCategory
  useEffect(() => {
    dispatch(getCoursesAction());
  }, [dispatch]);

  // Category
  const uniqCategory = [];
  courseList.filter((course) => {
    if (!uniqCategory.includes(course.category.name)) {
      uniqCategory.push(course.category.name);
    }
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_section}>
          <div className={styles.section_left}>
            <h4>COURSE</h4>
            {isLoading ? (
              <LoaderSecond />
            ) : (
              <>
                <ul>
                  <li>
                    <a href={"/categories/" + uniqCategory[0]}>{uniqCategory[0]}</a>
                  </li>
                  <li>
                    <a href={"/categories/" + uniqCategory[1]}>{uniqCategory[1]}</a>
                  </li>
                  <li>
                    <a href={"/categories/" + uniqCategory[2]}>{uniqCategory[2]}</a>
                  </li>
                  <li>
                    <a href={"/categories/" + uniqCategory[3]}>{uniqCategory[3]}</a>
                  </li>
                </ul>
              </>
            )}
          </div>
          <div className={styles.section_left}>
            <h4>TEACH</h4>
            <ul>
              <li>
                <a href="/">Teach at Lektur</a>
              </li>
              <li>
                <a href="/">For school</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </ul>
          </div>
          <div className={styles.section_left}>
            <h4>RESOURCE</h4>
            <ul>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
          <div className={styles.section_right}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <br />
            <p>Lektur &copy; 2022. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
