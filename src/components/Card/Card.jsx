import React, { useEffect, useState } from "react";
import "./Card.css";
const Card = ({ product }) => {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div className="image-container">
          <img src={product.image} alt={product.category} className="image" />
        </div>
        <div className="info">
          <div className="title secondaryText">
            {product.title.split(" ").slice(0, 4).join(" ")}
          </div>
          <div className="product-price thirdtext">
            Price: {product.price} $
          </div>
          <div className="microdetails">Category: {product.category}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
