import React from 'react'
import { createContext,useContext } from 'react'

export const CartContext= createContext([{
    cart:[],
   addToCart:(product)=>{},
   removeFromCart:(id)=>{}
}])

export const useCartContext = () => {


  return useContext(CartContext)
}

export const CartContextProvider= CartContext.Provider

export default CartContextProvider