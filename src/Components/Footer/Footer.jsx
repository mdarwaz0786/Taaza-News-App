import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-upper-part">
          <div className="footer-section">
            <h5>Taaza News App</h5>
            <p>Explore the future of news with our Taaza News App, delivering the worlds latest in a glance.</p>
          </div>

          <div className="footer-section">
            <h5>Social Handles</h5>
            <p>LinkedIn</p>
            <p>Facbook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>

          <div className="footer-section">
            <h5>Quick Links</h5>
            <p>About Us</p>
            <p>Specification</p>
            <p>Features</p>
            <p>Download Apps</p>
          </div>

          <div className="footer-section">
            <h5>Contact Us</h5>
            <p>Call Us: 0123456789</p>
            <p>Address: New Delhi, India</p>
            <p>Mail Us: abc@gmail.com</p>
          </div>
        </div>

        <div className="footer-lower-part">
          <p>© 2024 Taaza News App. All rights reserved by Taaza News App.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
