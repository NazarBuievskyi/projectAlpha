import React from 'react';


interface Props {
    cartItems: string[]
    onClear: () => void
}

function Cart({cartItems, onClear}: Props) {
    return (
        <div>
            <div>Cart</div>
            <ul>
                {cartItems.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <button onClick={onClear}>Clear</button>
        </div>
    );
}

export default Cart;