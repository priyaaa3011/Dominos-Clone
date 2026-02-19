import React from 'react';

const offers = [
  {
    id: 1,
    title: "Buy 1 Get 1 Free",
    description: "Buy any medium pizza and get another absolutely free!",
    code: "BOGO",
    validTill: "April 30, 2025",
  },
  {
    id: 2,
    title: "50% Off on Orders Above ₹500",
    description: "Get 50% off when your order is ₹500 or more. Valid for online payments.",
    code: "HALFOFF",
    validTill: "April 20, 2025",
  },
  {
    id: 3,
    title: "Free Garlic Bread",
    description: "Get a free Garlic Bread with any large pizza.",
    code: "GARLICFREE",
    validTill: "May 5, 2025",
  },
];

function OfferCard({ title, description, code, validTill }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-primary">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>Use Code:</strong> <code>{code}</code>
        </p>
        <p className="card-text text-muted">
          <small>Valid till: {validTill}</small>
        </p>
      </div>
    </div>
  );
}

function Offer() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">🍕 Domino's Offers & Deals</h2>
      {offers.map((offer) => (
        <OfferCard key={offer.id} {...offer} />
      ))}
    </div>
  );
}

export default Offer;
