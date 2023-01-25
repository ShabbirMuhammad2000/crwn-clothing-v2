import { useContext } from 'react'

import {ReactComponent as ShoppingIcon } from './../../assests/shopping-bag.svg'

import { CartContext } from '../../contexts/cart-dropdown.context'

import CartItem from '../cart-item/cart-item.component'

import { CartIconContainer, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext) 

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    const {quantity} = CartItem

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon

