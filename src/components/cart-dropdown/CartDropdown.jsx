import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cartItem'
import CustomButton from '../custom-button/customButton'

import './cart-dropdown.scss'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
          (
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          ) :
          (
            <span className="empty-message">Your cart is empty</span>
          )
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)