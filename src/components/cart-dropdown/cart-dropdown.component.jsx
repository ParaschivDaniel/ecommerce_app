import CustomButton from "../custom-button/custom-button.component"
import CartItem from "../cart-item/cart-item.component"

import { CartDropdownContainer, CartItemsContainer, EmptyMessageSpan } from "./cart-dropdown.styles"
import "./cart-dropdown.styles.scss"

import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router"

import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { selectCartItems } from "../../redux/cart/cart.selectors"

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        (cartItems.map(
                            cartItem =>
                                <CartItem key={cartItem.id} item={cartItem} />
                        ))
                        :
                        <EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>

                }
            </CartItemsContainer>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
