import Button from "../../BaseComponents/Ui/Button/Button";
import Input from "../../BaseComponents/Ui/Input/Input";
import "./Footer.css";
import ItemIcons from "./ItemIcons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo-icon">ModernMart</div>
          <p>
            Design Design amazing digital experiences that create more happy in
            the world. amazing digital experiences that create more happy in the
            world.
          </p>
          <Button>Contact Us</Button>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li>Overview</li>
              <li>Features</li>
              <li>
                Solutions <span className="new-badge">New</span>
              </li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Media kit</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help centre</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Social</h4>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>GitHub</li>
              <li>AngelList</li>
              <li>Dribbble</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Licenses</li>
              <li>Settings</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © Create by <a href="">https://github.com/AminKei</a> Untitled UI. All
          rights reserved.
        </p>
        <div>
          <ItemIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
