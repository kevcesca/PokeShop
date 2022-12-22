import React from 'react'
import Cart from '../../img/cart.svg';

export default function CartWidget() {
    return (
        <button className='cart-padding d-flex'>
            <img src={Cart} alt="Your shopping cart" />
            <div><p className='cart-notification'>1</p></div>
        </button>
    )
}
