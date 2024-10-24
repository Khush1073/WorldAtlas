import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt, faAddressBook } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">                                      
        <div className="footer-content">
          <div className="footer-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Email us at: <a href="mailto:info@example.com">info@example.com</a></p>
          </div>

          <div className="footer-item">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <p>Call us at: <a href="tel:+123456789">+123-456-789</a></p>
          </div>

          <div className="footer-item">
            <FontAwesomeIcon icon={faAddressBook} />
            <p>Contact us: <a href="/contact">Contact Form</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
