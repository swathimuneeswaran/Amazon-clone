import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";
import StarIcon from '@mui/icons-material/Star';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
        console.log(id);
    };

    return (
        <div className='checkoutProduct'>
            <img src={image} className='checkoutProduct__image' alt={title} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating star'>
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>
                            <StarIcon />
                        </p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
