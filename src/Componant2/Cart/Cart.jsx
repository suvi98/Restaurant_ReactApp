import React from "react";
import { Navigate } from "react-router-dom";
import Navigation from '../Navbar/Navigation'
import './Cart.css'

const Contact=({cartItems, handleAddProduct, handleRemoveProduct})=> {

  const totalPrice= cartItems.reduce((price,item)=> price + item.quantity * item.price, 0);

  const handleOrder=()=>{
    Navigate("/about")
  }
  return (
    <>
    <Navigation/>
    <div className='cart-item'>
          <h2 className='cart-item-header'> Cart items</h2>
            <div className='clear-cart'>
            <button className='clear-cart-button' >Order</button>
                {/* {cartItems.length >= 1 &&(
                    <button className='clear-cart-button' onClick={handleOrder}>Order</button>
                )} */}
            </div>
           {cartItems.length === 0 &&(
            <div className='cart-item-empty'>No items added</div>
           )} 

           <div>
            {cartItems.map((item) =>(
                <div key={item.id} className="cart-item-list">
                    <img className='cart-item-image' 
                    src={item.image} 
                    alt={item.name}/>

                    <div className='cart-item-name'>{item.name}</div>
                    <div className='cart-itemfunction'>
                        <button className='cart-item-add' onClick={() => handleAddProduct(item)}>+</button>
                        <button className='cart-item-remove' onClick={() => handleRemoveProduct(item)}>-</button>
                    </div>
                    <div className='cart-item-price'>
                        {item.quantity} * ${item.price}
                    </div>
                </div>
            ))}
           </div>

           <div className='cart-item-total-price-name'>
            Total price
            <div className='cart-item-total-price'>${totalPrice}</div>
           </div>
        </div>
    </>
  );
}

export default Contact;