import React from 'react';
import './Order.css';

function Order() {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="containers">
      <div className="orders">
 
         <div className="order">
        <h1>Orders</h1>
        <h3>Your order has been placed</h3>
        <h3>Your order will be delivered soon</h3>
        <span>Expected Delivery Date: {formattedDeliveryDate}</span>
        <h3>Thank you for shopping with us ☺</h3>
</div>

      </div>
    </div>
  );
}

export default Order;
