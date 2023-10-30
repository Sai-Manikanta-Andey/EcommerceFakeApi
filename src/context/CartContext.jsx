import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart,setCart]= useState([])
  let addToCart= (id,product)=>{}
  let removeFromCart = (id)=>{}
  
  return (
    <CartContext.Provider  value={{addToCart,removeFromCart,cart,setCart}} >
       {children} 
    </CartContext.Provider>
  )
}

export default CartProvider