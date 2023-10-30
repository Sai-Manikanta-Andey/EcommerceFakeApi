import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import {AiTwotoneDelete} from "react-icons/ai"


const Cart = () => {
  const {cart,setCart} =useContext(CartContext)
  let {removeFromCart}= useContext(CartContext)
  removeFromCart = (id)=>{
    setCart((prev)=> prev.filter((item) => item.id !== id));
    
  }

  return cart?.length === 0 ? (
    <div className="cart-state primaryText paddings maxWidth">
      Cart is empty
    </div>
  ) : (
    <div className="cart-wrapper  paddings maxWidth">
      <div className="cart-container ">
        
        {cart.map((eachProd) => (
          <div className="prod">
            <div className="cart-card" key={eachProd.id}>
              <div className="card-left">
                <div className="prod-image">
                  <img src={eachProd.image} alt="ad" className="cart-img" />
                </div>
                <div className="card-detail">
                  <h4 className="thirdText">{eachProd.title} </h4>
                  <p className="thirdText">
                    Price : {eachProd.price * eachProd.quantity} $
                  </p>
                  <p className="thirdText">Quantity : {eachProd.quantity} </p>
                </div>
              </div>
              <div className="card-right">
                <button
                  className="btn"
                  onClick={() => removeFromCart(eachProd.id)}
                >
                  <AiTwotoneDelete fontSize={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
