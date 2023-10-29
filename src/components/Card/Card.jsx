import React, { useEffect, useState } from "react";
import "./Card.css";
const Card = ({ product }) => {
  // const [product,setProduct]= useState([])

  // useEffect(()=>{
  //   fetchData()
  // },[])
  // const fetchData = async (=>{
  //   const response = await fetch()
  // })

  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div className="image-container">
          <img src={product.image} alt={product.category} className="image" />
        </div>
        <div className="title secondaryText">
          
          {product.title.split(" ").slice(0, 4).join(" ")}
        </div>
        
      </div>
    </div>
  );
};

export default Card;
