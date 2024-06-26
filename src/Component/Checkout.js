import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct.js';

const Checkout = () => {
  const [{basket,user},dispatch]=useStateValue();

  return (
    <>
    <div className="checkout">
        <div className="checkout__left">
            <img className='checkout__ad' src="https://m.media-amazon.com/images/G/31/img24/April/SF/SF_PC_1._SX1500_QL85_.jpg" alt=""></img>
        
        <div>
             <h3>Hello</h3>
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
          {basket.map(item=>(
            <CheckoutProduct 
            key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          </div>
          </div>

        <div className="checkout__right">
           <Subtotal />
        </div>
    </div>
    </>
  )
}

export default Checkout