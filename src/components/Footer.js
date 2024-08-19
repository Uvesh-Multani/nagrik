// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3 style={styles.heading}>About Us</h3>
          <p style={styles.text}>
            We are committed to providing the best service. Learn more about our
            mission and values.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            <li>
              <Link to="/" style={styles.link}>Home</Link>
            </li>
            <li>
              <Link to="/about" style={styles.link}>About</Link>
            </li>
            <li>
              <Link to="/contact" style={styles.link}>Contact</Link>
            </li>
            <li>
              <Link to="/services" style={styles.link}>Services</Link>
            </li>
            <li>
              <Link to="/privacy" style={styles.link}>Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.text}>
            Email: info@nagrik.io
            <br />
            Phone: +91 94995 66888
            <br />
            NAGRIK HQ, Surat-395007, Gujarat, India
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>Subscribe</h3>
          <p style={styles.text}>Get the latest updates and offers.</p>
          <form style={styles.form}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Subscribe</button>
          </form>
        </div>

        <div style={styles.section}>
          <h3 style={styles.heading}>Follow Us</h3>
          <div style={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p style={styles.footerText}>
          &copy; {new Date().getFullYear()} NAGRIK. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    paddingTop: "40px",
    paddingBottom: "20px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "0 20px",
  },
  section: {
    flex: "1 1 200px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.6",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  socialLinks: {
    display: "flex",
    gap: "10px",
  },
  socialLink: {
    color: "#fff",
    fontSize: "20px",
    textDecoration: "none",
    padding: "10px",
    backgroundColor: "#555",
    borderRadius: "5px",
    textAlign: "center",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footerBottom: {
    borderTop: "1px solid #444",
    marginTop: "20px",
    paddingTop: "20px",
    textAlign: "center",
  },
  footerText: {
    fontSize: "14px",
  },
};

export default Footer;
