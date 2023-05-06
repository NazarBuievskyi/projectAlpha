import React from 'react';

interface Props {
    cartItemsCount: number
}

function NavBar({cartItemsCount}: Props) {
    return (
        <div>
            <h2>NavBar: {cartItemsCount}</h2>
        </div>
    );
}

export default NavBar;