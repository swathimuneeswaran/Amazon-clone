import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import { db } from "../firebase";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const Navigate = useNavigate();

  const handleSubmit = async () => {
    // Clear the basket
    dispatch({
      type: "EMPTY_BASKET"
    });

    // Save order details to Firestore
    try {
      const orderRef = await db.collection("orders").add({
        userId: user.uid,
        userEmail: user.email,
        totalAmount: getBasketTotal(basket),
        createdAt: new Date(),
        items: basket.map(item => ({
          id: item.id,
          title: item.title,
          price: item.price,
          rating: item.rating,
          image: item.image
        }))
      });
      console.log("Order placed with ID:", orderRef.id);
    } catch (error) {
      console.error("Error placing order:", error);
    }

    // Navigate to orders page
    Navigate("/orders");
  };


  return (
    <>
      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>978 housing lane</p>
              <p>Chennai</p>
            </div>
          </div>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
              </div>
              <button onClick={handleSubmit}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
