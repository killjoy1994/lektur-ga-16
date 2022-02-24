import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";
import styles from "../../styles/Footer.module.css";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_section}>
          <div className={styles.section_left}>
            <h4>COURSE</h4>
            <ul>
              <li>
                <a href="/">Business</a>
              </li>
              <li>
                <a href="/">Technology</a>
              </li>
              <li>
                <a href="/">Graphic Design</a>
              </li>
              <li>
                <a href="/">Self Development</a>
              </li>
            </ul>
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
