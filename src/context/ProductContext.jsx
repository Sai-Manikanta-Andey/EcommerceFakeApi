import React from 'react'
import { useEffect,useState } from 'react'
import { createContext } from 'react'
import { MAIN_URL } from '../utils/Constants'

export const ProductContext=  createContext()
  


const ProductContextProvider = ({children}) => {
    const [products,setProducts]= useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData =async ()=>{
        const response = await fetch(MAIN_URL)
        const data = await response.json()
        setProducts(data)
    }
   


  return (
    <ProductContext.Provider value={{products}}>{children} </ProductContext.Provider>
  )
}

export default ProductContextProvider