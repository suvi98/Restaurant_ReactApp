import React from "react";
import Navigation from './Navbar/Navigation'
import './Cart/Cart.css'


const About=({cartItems})=> {
  
  const totalPrice= cartItems.reduce((price,item)=> price + item.quantity * item.price, 0);

  


  return (
    <>
    <Navigation/>
    <div className='cart-item'>
          <h2 className='cart-item-header'> Bill</h2>
            <div className='clear-cart'>
                {cartItems.length >= 1 &&(
                    <button className='clear-cart-button' >Pay Now</button>
                )}
            </div>
           {cartItems.length === 0 &&(
            <div className='cart-item-empty'>No items added</div>
           )} 

           <div style={{margin:"0px 0px 0px 20px"}}>
            
              <h5 className='cart-item-name'>Email: {localStorage.getItem("userEmail")} </h5>
              <h5> Phone:{localStorage.getItem("userPhone")} </h5>
              <h5> Address:{localStorage.getItem("userAddress")}</h5>
              <h5>Order:</h5>
                {cartItems.map((item) =>(
                    <div key={item.id} className="cart-item-list">
                        

                        <div className='cart-item-name'>{item.name}</div>
                      
                        <div className='cart-item-price'>
                            {item.quantity} * ${item.price}
                        </div>
                    </div>
                ))}
           </div>

           <div className='cart-item-total-price-name'>
            Total Bill
            <div className='cart-item-total-price'>${totalPrice}</div>
           </div>
        </div>
    </>
  );
}

export default About;