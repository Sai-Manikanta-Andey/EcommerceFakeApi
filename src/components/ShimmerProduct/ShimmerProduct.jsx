import React from "react";
import "./ShimmerProduct.css";

const ShimmerProduct = () => {
  return (
    <div className="ShimmerProduct-wrapper">
      <div className="shimmer-product-container paddings maxWidth">
        <div className="left paddings">
          <div className="product-image-shimmer "></div>
        </div>
        <div className="right paddings">
          <div className="product-title-shimmer"></div>
          <div className="shimmer-title"></div>
          <div className="shimmer-price"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerProduct;
