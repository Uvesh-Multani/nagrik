// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoText}>NAGRIK</Link>
      </div>
      <nav style={styles.nav}>
        <Link to="/signin" style={styles.navLink}>Sign In</Link>
        <Link to="/signup" style={styles.navLink}>Sign Up</Link>
        {/* Add more interactive elements here if needed */}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    fontSize: "24px",
  },
  logoText: {
    color: "#fff",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Header;
