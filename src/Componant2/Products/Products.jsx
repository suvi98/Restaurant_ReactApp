import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from '../Navbar/Navigation'

import './Products.css'
import data from '../Data.json'


const Products=({handleAddProduct})=> {
  return (

    <>
    
    <Navigation/>
    <div className="home">
        <div className='products'>
            {data.produtItems.map((productsItem)=>(
                <div className='card'>
                    <div>
                        <img className='products-image' src={productsItem.image} alt={productsItem.name}/>
                    </div>
                    <div>
                        <h3 className='products-name'>
                            {productsItem.name}
                        </h3>
                    </div>
                    <div className='products-price'>${productsItem.price}</div>

                    <div>
                        <button className='products-add-button' 
                        onClick={()=>handleAddProduct(productsItem)}
                        >Add to card
                      
                        </button>
                    </div>
                </div>
            ))}

        </div>
    );
    </div>
    </>
  );
}

export default Products;