import React from "react";
import Nav from '../Nav/Nav'
import './Bill.css'

const Bill=({cartItems})=> {

    const totalPrice= cartItems.reduce((price,item)=> price + item.quantity * item.price, 0);
    return (
    <>
    <Nav/>
    <div className='cart-item'>
          <h2 className='cart-item-header'> Cart items</h2>
            {/* <div className='clear-cart'>
                {cartItems.length >= 1 &&(
                    <button className='clear-cart-button' onClick={()=>handleCartClearance}>Clear Cart</button>
                )}
            </div> */}
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
                    {/* <div className='cart-itemfunction'>
                        <button className='cart-item-add' onClick={() => handleAddProduct(item)}>+</button>
                        <button className='cart-item-remove' onClick={() => handleRemoveProduct(item)}>-</button>
                    </div> */}
                    <div className='cart-item-price'>
                        {item.quantity} * ${item.price}
                    </div>
                </div>
            ))}
           </div>

           <div className='cart-item-total-price-name'>
                Today Bill:
            <div className='cart-item-total-price'>${totalPrice}</div>
           </div>
        </div>
    </>
  );
}

export default Bill;