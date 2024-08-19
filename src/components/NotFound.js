// src/components/NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import errorImage from '../assets/404-error.png'; // Make sure to add your image in the assets folder

function NotFound() {
  return (
    <div style={styles.container}>
      <img src={errorImage} alt="404 Not Found" style={styles.image} />
      <h1 style={styles.title}>Oops! Page Not Found</h1>
      <p style={styles.text}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" style={styles.link}>
        Go Back Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '0 20px',
  },
  image: {
    width: '100%',
    maxWidth: '200px',
    height: 'auto',
  },
  title: {
    fontSize: '2rem',
    margin: '20px 0',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '20px',
  },
  link: {
    fontSize: '1rem',
    color: '#007BFF',
    textDecoration: 'none',
    border: '1px solid #007BFF',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  },
};

styles.link.hover = {
  backgroundColor: '#007BFF',
  color: '#fff',
};

export default NotFound;
