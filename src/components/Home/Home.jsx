import React from 'react'
import { ProductContext } from '../../context/ProductContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'
import './Home.css'
import ShimmerHome from '../ShimmerHome/ShimmerHome'

const Home = () => {
    const {products}= useContext(ProductContext)

    
    
  if(products.length  === 0) return <ShimmerHome/>
  return (
    <div className='home-wrapper'>
        <div className="home-container paddings maxWidth">
            {
              products.map((eachProduct)=>(
                <Link className='Link' to={'/products/'+ eachProduct.id } key={eachProduct.id}> 
                  <Card product = {eachProduct} />
                </Link>
              ))
            }
        </div>
    </div>
  )
}

export default Home