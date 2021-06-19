import React from 'react';
import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import {toggleCartHidden} from "../../redux/cart/cart.action"
import {connect} from "react-redux"

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <span className="item-counter">0</span>

    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () =>{ dispatch(toggleCartHidden())}
})
export default connect(null, mapDispatchToProps)(CartIcon);