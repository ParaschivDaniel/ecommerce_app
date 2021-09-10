import { CartIconDiv, ItemCountSpan, ShoppingIconElement } from "./cart-icon.styles"

import { connect } from "react-redux"
import { toggleCartHidden } from "../../redux/cart/cart.actions"

import { selectCartItemsCount } from "../../redux/cart/cart.selectors"
import { createStructuredSelector } from "reselect"

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <CartIconDiv onClick={toggleCartHidden}>
            <ShoppingIconElement />
            <ItemCountSpan>{itemCount}</ItemCountSpan>
        </CartIconDiv>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
