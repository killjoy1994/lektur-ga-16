
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-section course">
          <h4>COURSE</h4>
          <br />
          <p>Business</p>
          <p>Technology</p>
          <p>Graphic Design</p>
          <p>Self Development</p>
        </div>
        <div className="footer-section teach">
          <h4>TEACH</h4>
          <br />
          <p>Teach at Lektur</p>
          <p>For school</p>
          <p>FAQ</p>
        </div>
        <div className="footer-section resource">
          <h4>RESOURCE</h4>
          <br />
          <p>Contact Us</p>
          <p>About</p>
          <p>Careers</p>
        </div>
        <div className="footer-section copyright">
          <h4>
            <span>LEKTUR</span>
          </h4>
          <br />
          <p>
            Lektur &copy; 2022
            <span className="all-rights">All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
