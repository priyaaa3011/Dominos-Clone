import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>About Domino's</h1>
        <p style={styles.paragraph}>
          Founded in 1960, Domino’s Pizza has grown into one of the world’s leading pizza delivery brands.
          Known for quality, convenience, and innovation, we are proud to serve delicious pizzas across more
          than 90 countries. Whether it’s our iconic pepperoni or a fully-loaded custom pizza, Domino’s
          delivers hot and fresh meals to your doorstep — fast.
        </p>
        <p style={styles.paragraph}>
          With a focus on technology and customer satisfaction, Domino’s continues to redefine how the world enjoys pizza.
          From our mobile app to our unique flavor combinations, we're here to make every pizza moment memorable.
        </p>
        <img
          src="https://i.pinimg.com/474x/4b/30/05/4b300563f0f78bc49457e07913f665d9.jpg"
          alt="Domino's Logo"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f4f4f4',
    padding: '60px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  card: {
    backgroundColor: '#ffffff',
    maxWidth: '800px',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    color: '#1a1a1a',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  image: {
    width: '200px',
    borderRadius: '8px',
    marginTop: '30px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
  },
};

export default About;
