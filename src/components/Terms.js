// src/components/Terms.js
import React from "react";

function Terms() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms and Conditions</h1>
      <p style={styles.text}>
        Welcome to our Terms and Conditions page. These terms outline the rules and regulations for the use of our website.
      </p>

      <h2 style={styles.subheading}>Acceptance of Terms</h2>
      <p style={styles.text}>
        By accessing our website, you agree to be bound by these terms and conditions.
      </p>

      <h2 style={styles.subheading}>Changes to Terms</h2>
      <p style={styles.text}>
        We reserve the right to update these terms at any time. Your continued use of the website will be deemed as acceptance of the updated terms.
      </p>

      <h2 style={styles.subheading}>Contact Us</h2>
      <p style={styles.text}>
        If you have any questions about these Terms, please contact us at terms@example.com.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "24px",
    marginTop: "20px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "10px",
  },
};

export default Terms;
