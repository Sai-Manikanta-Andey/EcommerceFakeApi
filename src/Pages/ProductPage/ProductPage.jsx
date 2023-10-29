import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MAIN_URL } from "../../utils/Constants";
import "./ProductPage.css";
import { BsStarFill } from "react-icons/bs";
import { ProductContext } from "../../context/ProductContext";
import { useCartContext } from "../../context/CartContext";

const ProductPage = () => {
  const { Id } = useParams();
  const [product, setProduct] = useState([]);
  const [cartItem,setCartItem] = useState([])
  let {addToCart} = useCartContext()

  addToCart= (product)=>{
    setCartItem((prev)=> [{...product,...product}])
  }
  console.log(product);
  console.log(cartItem);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await fetch(MAIN_URL + "/" + Id);
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };

  const { price, image, description, title } = product;

  return (
    <div className="product-wrapper">
      <div className="product-container paddings maxWidth">
        <div className="image-button-container">
          <div className="image-container">
            <img src={image} alt={title} className="product-image" />
          </div>
          <div className="button-container">
            <button className="btn"  onClick={(product)=>addToCart(product)}>ADD TO CART </button>
            <button className="btn">BUY NOW</button>
          </div>
        </div>
      
      
        <div className="product-details">
          <h2 className="prooduct-name primaryText"> {title} </h2>
          <div className="rating">
            <h4> 5{<BsStarFill fontSize={15} fill="green" />}</h4>
          </div>
          <h4 className="price"> {price} $ </h4>
          <p className="description thirdText"> {description} </p>
        </div>
      </div>
     
    </div>
  );
};
export default ProductPage;
