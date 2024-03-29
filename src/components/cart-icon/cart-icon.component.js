import React from 'react';
import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import {toggleCartHidden} from "../../redux/cart/cart.action"
import {connect} from "react-redux"
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"
import { createStructuredSelector } from 'reselect';
const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <span className="item-counter">{itemCount}</span>

    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () =>{ dispatch(toggleCartHidden())}
})
const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);