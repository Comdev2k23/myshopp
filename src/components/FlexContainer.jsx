import React from 'react'
import products from './ProductList'
import './FlexContainer.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {CiShoppingCart} from 'react-icons/ci'



export const FlexContainer = ({products}) => {
  return (
    <div className='flex-container'>
        {products.map((product, index) => (
            <div key={index} className='flex-item'>
                <div>
                    <img src={product.src} alt={product.name} className='img-icon' />
                </div>
                <div className='flex-body'>
                <div><h5>{product.name}</h5></div>
                <div>{product.description}</div>
                <div className='p-price'>P{product.price}.00</div>
                
                <button className='button'>add to cart <CiShoppingCart /> </button>
                <span>    </span>
                <button className='button'>view product </button>
               
                </div>
               
                
            </div>
        ))}
    </div>
  )
}
