import React from 'react';

function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Domino's</h1>

      <div style={styles.infoSection}>
        <p><strong>Customer Care:</strong> 1800-208-1234</p>
        <p><strong>Email:</strong> support@dominos.com</p>
        <p><strong>Address:</strong> Domino's Pizza, No. 42, Pizza Street, Flavor Town, USA</p>
        <p><strong>Working Hours:</strong> Mon - Sun: 10:00 AM – 11:00 PM</p>
      </div>

      <div style={styles.formSection}>
        <h2 style={styles.subHeading}>Send Us a Message</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    color: '#333',
  },
  heading: {
    fontSize: '36px',
    color: '#0054a6',
    textAlign: 'center',
    marginBottom: '30px',
  },
  infoSection: {
    fontSize: '18px',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  formSection: {
    marginTop: '20px',
  },
  subHeading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    fontSize: '16px',
  },
  textarea: {
    padding: '10px',
    height: '100px',
    fontSize: '16px',
    marginBottom: '15px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#0054a6',
    color: 'white',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Contact;
