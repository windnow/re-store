import React from "react";
import './shop-header.css';

const ShopHeader = ({numItems, total}) => {

    return (
        <header className="shop-header">
            <a className="logo text-dark" href=".">ReStore</a>
            <div className="shoping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (₸{total})
            </div>
        </header>
    )

}

export default ShopHeader;