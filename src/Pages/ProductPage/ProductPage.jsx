import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MAIN_URL } from "../../../utils/Constants";
import "./ProductPage.css";
import { BsStarFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import ShimmerProduct from "../../components/ShimmerProduct/ShimmerProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = () => {
  const { Id } = useParams();
  const [product, setProduct] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  let { addToCart } = useContext(CartContext);
  const notify = () => toast("Added To Cart");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(MAIN_URL + "/" + Id);
    const data = await response.json();
    setProduct(data);
  };

  addToCart = (Id, product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is in the cart, update the quantity
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
  };

  const { price, image, description, title } = product;

  // ...

  <button className="btn" onClick={() => addToCart(Id, product)}>
    ADD TO CART
  </button>;

  if (product.length === 0) return <ShimmerProduct />;
  return (
    <div className="product-wrapper">
      <div className="product-container paddings maxWidth">
        <div className="image-button-container">
          <div className="image-container">
            <img src={image} alt={title} className="product-image" />
          </div>
          <div className="button-container">
            <button
              className="btn"
              onClick={() => {
                notify(), addToCart(Id, product);
              }}
            >
              ADD TO CART{" "}
            </button>
          </div>
        </div>

        <div className="product-details">
          <h2 className="product-name secondaryText"> {title} </h2>
          <div className="rating">
            <h4>Rating: 5{<BsStarFill fontSize={15} fill="green" />}</h4>
          </div>
          <h4 className="price">Price : {price} $ </h4>
          <p className="description thirdText"> {description} </p>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </div>
  );
};
export default ProductPage;
