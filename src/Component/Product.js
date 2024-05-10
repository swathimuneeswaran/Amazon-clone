import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';

const Product = ({id,title,price,image,rating}) => {
  const [state,dispatch]=useStateValue();

const addToBasket = () =>{

  dispatch({
    type:'ADD_TO_BASKET',
    item:{
      id:id,
      title:title,
      image:image,
      price:price,
      rating:rating
    },
  });
}

  return (
   <div className="product">
     <div className="product__info">
        <p>{title}</p>
        <p className='product__price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_,i)=>(<StarIcon className='star'></StarIcon>))}
            
        </div>
        
     </div>
     <img src={image}></img>
    <button type="button" onClick={addToBasket}>Add to Cart</button>
   </div>
  )
}

export default Product