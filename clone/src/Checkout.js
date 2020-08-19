import React from 'react';
import {useStateValue} from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout(){
    const [{basket}] = useStateValue();
    return (
        <div className = "checkout">
            <div className = "checkout_left">
            <img className = "checkout_ad" src = "https://www.onlinekhabar.com/wp-content/uploads/2020/07/mahindra-1200.gif" alt = ""/> 

            {basket?.length === 0 ?(
                <div>
                    <h1>You have no items in your basket</h1>
                    <p>To buy, click on the add to basket button and choose you own good</p>
                </div>
            ):(
                <div>
                    <h1 className = "checkout_title">Your shopping basket list</h1>
                    {
                        basket.map(item =>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price = {item.price}
                                rating = {item.rating}
                                image = {item.image}
                            />
                        ))
                        }
                </div>
            ) 
            }

            </div >
             {basket.length > 0 && (
                <div className = "checkout_right">
                <Subtotal />
            </div>
            )}
        </div>
    );
}

export default Checkout;