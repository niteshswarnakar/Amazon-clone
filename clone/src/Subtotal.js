import React from 'react';
import {useStateValue} from './StateProvider';
import './Subtotal.css';
import {getBasketTotal} from './reducer';

function Subtotal(){
    const total_price = getBasketTotal();
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className = "subtotal">
            <h2>Subtotal({basket.length}<br/>items) : <strong>${getBasketTotal(basket)}</strong></h2>
            <div className = "subtotal_checkbox">
                <input id="checkbox" type = "checkbox"/>
                <label for="checkbox">This order includes a gift</label>
            </div>
            <button className = "subtotal_proceedButton"> Proceed to Checkout </button>
        </div>
    );
}

export default Subtotal;