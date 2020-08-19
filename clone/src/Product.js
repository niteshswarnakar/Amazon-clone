import React from  'react';
import './Product.css';
import {useStateValue} from './StateProvider'
function Product({id,title,price,image,rating}){
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = ()=>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title:title,
                price:price,
                image:image,
                rating:rating
            }
        })
    }
    return (
        <div className = 'product'>
            <div className = 'product_info'>
                <p>{title}</p>
           
                    <p className = "product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                    </p>
                <div className = "product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>*</p>
                    ))
                }
                </div>
            </div>
            <img src = {image} alt = "" />
            <button onClick = {addToBasket} className = "product_button">Basket</button>
        </div>
    );
}

export default Product